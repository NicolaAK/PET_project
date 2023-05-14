import React, { FC, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Button } from '@components/ReusedComponents/Button';
import { Container } from '@components/ProductCatalog/Description/style';
import RHFSelect from '@components/RHF/RHFSelect';
import { ADD_PRODUCT_TO_CART_FIELDS, addProductToCart } from '@components/ProductCatalog/FormAddCart/validations';
import { yupResolver } from '@hookform/resolvers/yup';

interface IAddProductToCart {
    [ADD_PRODUCT_TO_CART_FIELDS.SIZE]: number;
}

interface IFormAddCart {
    sizes: string[];
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
                <RHFSelect
                    width={450}
                    name={ADD_PRODUCT_TO_CART_FIELDS.SIZE}
                    options={sizes}
                    placeholder="Выберите размер"
                />
                <Container>
                    <Button isLoading={isSubmitting}>В КОРЗИНУ</Button>
                    <Button value={isActiveFavouritesButton} onChange={toggleActiveFavouritesButton} color="favourites">
                        В ИЗБРАННОЕ
                    </Button>
                </Container>
            </form>
        </FormProvider>
    );
};

export default FormAddCart;
