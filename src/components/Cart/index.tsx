import React from 'react';
import Order from '@components/Cart/Order';
import { generateGithubPagesRoutes } from '@utils/helpers';
import Breadcrumbs from '@components/ReusedComponents/Breadcrumbs';
import { useFieldArray, useForm, FormProvider } from 'react-hook-form';
import Photo1 from '@assets/foto/mainModel1.png';
import { Button } from '@components/ReusedComponents/Button';
import { Content, Container } from './style';

const URL = [
    { link: 'Главная', path: generateGithubPagesRoutes('') },
    { link: 'Каталог', path: '' },
];
const products = [
    {
        id: 1,
        name: 'Белая куртка',
        article: 'арт. 1589956',
        countProduct: 1,
        size: 3,
        prices: { ru: 2350, ua: 12.2 },
        sizes: [
            {
                value: 1,
                label: 'XXS',
            },
            {
                value: 2,
                label: 'XS',
            },
            {
                value: 3,
                label: 'S',
            },
            {
                value: 4,
                label: 'M',
            },
            {
                value: 5,
                label: 'L',
            },
        ],
        color: 'blue',
        images: [Photo1],
    },
    {
        id: 2,
        name: 'Белая куртка',
        article: 'арт. 1589958',
        countProduct: 2,
        size: 2,
        prices: { ru: 5000, ua: 12.2 },
        sizes: [
            {
                value: 1,
                label: 'XXS',
            },
            {
                value: 2,
                label: 'XS',
            },
            {
                value: 3,
                label: 'S',
            },
            {
                value: 4,
                label: 'M',
            },
            {
                value: 5,
                label: 'L',
            },
        ],
        color: 'yellow',
        images: Photo1,
    },
    {
        id: 3,
        name: 'Белая куртка',
        article: 'арт. 1589958',
        countProduct: 3,
        prices: { ru: 2000, ua: 12.2 },
        size: 4,
        sizes: [
            {
                value: 1,
                label: 'XXS',
            },
            {
                value: 2,
                label: 'XS',
            },
            {
                value: 3,
                label: 'S',
            },
            {
                value: 4,
                label: 'M',
            },
            {
                value: 5,
                label: 'L',
            },
        ],
        color: 'white',
        images: Photo1,
    },
];
const Cart = () => {
    const methods = useForm({
        defaultValues: { products },
    });

    const { handleSubmit, control } = methods;

    const { fields, remove } = useFieldArray({
        control,
        name: 'products',
    });
    const onSubmit = (data: any) => console.log('data', data);
    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Container>
                    <Breadcrumbs URL={URL} />
                    <Content>
                        <Order fields={fields} remove={remove} />
                    </Content>
                </Container>
                <Button>Submit</Button>
            </form>
        </FormProvider>
    );
};

export default Cart;
