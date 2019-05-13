import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'category',
                loadChildren: './category/category.module#EcomabCategoryModule'
            },
            {
                path: 'product',
                loadChildren: './product/product.module#EcomabProductModule'
            },
            {
                path: 'customer',
                loadChildren: './customer/customer.module#EcomabCustomerModule'
            },
            {
                path: 'address',
                loadChildren: './address/address.module#EcomabAddressModule'
            },
            {
                path: 'wish-list',
                loadChildren: './wish-list/wish-list.module#EcomabWishListModule'
            }
            /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
        ])
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EcomabEntityModule {}
