import React, { FC, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Button } from '@components/ReusedComponents/Button';
import { GridButton1, GridButton2, GridContainer, GridSelect } from '@components/ProductCatalog/Description/style';
import { IOptions } from '@components/ReusedComponents/InputSelect';
import RHFSelect from '@components/RHF/RHFSelect';
import { ADD_PRODUCT_TO_CART_FIELDS, addProductToCart } from '@components/ProductCatalog/FormAddCart/validations';
import { yupResolver } from '@hookform/resolvers/yup';

interface IAddProductToCart {
    [ADD_PRODUCT_TO_CART_FIELDS.SIZE]: number;
}

interface IFormAddCart {
    sizes: IOptions[];
}

const FormAddCart: FC<IFormAddCart> = ({ sizes }) => {
    const [isActiveFavouritesButton, setIsActiveFavouritesButton] = useState(false);
    const toggleActiveFavouritesButton = () => setIsActiveFavouritesButton(!isActiveFavouritesButton);

    const methods = useForm<IAddProductToCart>({
        resolver: yupResolver(addProductToCart),
    });
    const {
        formState: { isSubmitting },
        handleSubmit,
    } = methods;

    const onSubmit = async (formValues: IAddProductToCart) => {
        // eslint-disable-next-line no-console
        console.log(formValues);
    };
    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
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
