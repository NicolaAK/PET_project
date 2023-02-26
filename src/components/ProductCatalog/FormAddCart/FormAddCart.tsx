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
} from '@components/ProductCatalog/Description/style';
import { colorsSchema } from '@components/Catalog/components/Products/Product';
import { IOptions } from '@components/ReusedComponents/InputSelect';
import RHFSelect from '@components/RHF/RHFSelect';
import { ADD_PRODUCT_TO_CART_FIELDS, addProductToCart } from '@components/ProductCatalog/FormAddCart/validations';
import { yupResolver } from '@hookform/resolvers/yup';

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
        watch,
    } = methods;

    const colorValue = watch(ADD_PRODUCT_TO_CART_FIELDS.COLOR);

    const onSubmit = async (formValues: IAddProductToCart) => {
        // eslint-disable-next-line no-console
        console.log(formValues);
    };

    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Colors>
                    {colors?.map((color) => (
                        // todo fix
                        // eslint-disable-next-line jsx-a11y/label-has-associated-control
                        <label htmlFor="color">
                            <EllipseColor
                                key={color}
                                {...register(ADD_PRODUCT_TO_CART_FIELDS.COLOR)}
                                type="radio"
                                value={color}
                                id="color"
                                color={colorsSchema[color]}
                                isSelectColor={colorValue === color}
                            />
                        </label>
                    ))}
                    {errors?.[ADD_PRODUCT_TO_CART_FIELDS.COLOR] && (
                        <p>{errors[ADD_PRODUCT_TO_CART_FIELDS.COLOR]?.message}</p>
                    )}
                </Colors>
                <GridContainer>
                    <GridSelect>
                        <RHFSelect
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
