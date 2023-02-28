import React, { FC, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Button } from '@components/ReusedComponents/Button';
import {
    Colors,
    EllipseColor,
    GridButton1,
    GridButton2,
    GridContainer,
    GridSelect,
    Label,
} from '@components/ProductCatalog/Description/style';
import { colorsSchema } from '@components/Catalog/components/Products/Product';
import { IOptions } from '@components/ReusedComponents/InputSelect';
import RHFSelect from '@components/RHF/RHFSelect';
import { ADD_PRODUCT_TO_CART_FIELDS, addProductToCart } from '@components/ProductCatalog/FormAddCart/validations';
import { yupResolver } from '@hookform/resolvers/yup';
import { ErrorText } from '@components/ReusedComponents/Input/style';

interface IAddProductToCart {
    [ADD_PRODUCT_TO_CART_FIELDS.SIZE]: number;
    [ADD_PRODUCT_TO_CART_FIELDS.COLOR]: string;
}

interface IFormAddCart {
    sizes: IOptions[];
    colors: string[];
}

const FormAddCart: FC<IFormAddCart> = ({ sizes, colors }) => {
    const [isActiveFavouritesButton, setIsActiveFavouritesButton] = useState(false);
    const toggleActiveFavouritesButton = () => setIsActiveFavouritesButton(!isActiveFavouritesButton);

    const methods = useForm<IAddProductToCart>({
        resolver: yupResolver(addProductToCart),
    });

    const {
        formState: { isSubmitting, errors },
        handleSubmit,
        register,
    } = methods;

    const onSubmit = async (formValues: IAddProductToCart) => {
        // eslint-disable-next-line no-console
        console.log(formValues);
    };
    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Colors>
                    {colors?.map((color) => (
                        <Label key={color}>
                            <EllipseColor
                                {...register(ADD_PRODUCT_TO_CART_FIELDS.COLOR)}
                                type="radio"
                                value={color}
                                id="color"
                                color={colorsSchema[color]}
                                radius={21}
                            />
                        </Label>
                    ))}
                </Colors>
                {errors?.[ADD_PRODUCT_TO_CART_FIELDS.COLOR] && (
                    <ErrorText>{errors[ADD_PRODUCT_TO_CART_FIELDS.COLOR]?.message}</ErrorText>
                )}
                <GridContainer>
                    <GridSelect>
                        <RHFSelect
                            width={510}
                            name={ADD_PRODUCT_TO_CART_FIELDS.SIZE}
                            options={sizes}
                            placeholder="Выберите размер"
                        />
                    </GridSelect>
                    <GridButton1>
                        <Button isLoading={isSubmitting}>В КОРЗИНУ</Button>
                    </GridButton1>
                    <GridButton2>
                        <Button
                            value={isActiveFavouritesButton}
                            onChange={toggleActiveFavouritesButton}
                            color="favourites"
                        >
                            В ИЗБРАННОЕ
                        </Button>
                    </GridButton2>
                </GridContainer>
            </form>
        </FormProvider>
    );
};

export default FormAddCart;
