import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeOneComponent } from './components/pages/home-one/home-one.component';
import { AboutOneComponent } from './components/pages/about-one/about-one.component';
import { PreventionComponent } from './components/pages/prevention/prevention.component';
import { DoctorsComponent } from './components/pages/doctors/doctors.component';
import { AppointmentComponent } from './components/pages/appointment/appointment.component';
import { SpreadComponent } from './components/pages/spread/spread.component';
import { OutbreakComponent } from './components/pages/outbreak/outbreak.component';
import { ProductsComponent } from './components/pages/products/products.component';
import { CartComponent } from './components/pages/cart/cart.component';
import { CheckoutComponent } from './components/pages/checkout/checkout.component';
import { ProductsDetailsComponent } from './components/pages/products-details/products-details.component';
import { FaqComponent } from './components/pages/faq/faq.component';
import { BlogOneComponent } from './components/pages/blog-one/blog-one.component';
import { BlogTwoComponent } from './components/pages/blog-two/blog-two.component';
import { BlogDetailsComponent } from './components/pages/blog-details/blog-details.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { ComingSoonComponent } from './components/pages/coming-soon/coming-soon.component';
import { ServicesComponent } from './components/pages/services/services.component';
import { ServiceOneComponent } from './components/pages/services/service-one/service-one.component';
import { ServiceTwoComponent } from './components/pages/services/service-two/service-two.component';

const routes: Routes = [
    {path: '', component: HomeOneComponent},
    {path: 'services', component: ServicesComponent},
    {path: 'services/service-part-1', component: ServiceOneComponent},
    {path: 'services/service-part-2', component: ServiceTwoComponent},
    {path: 'articles', component: BlogOneComponent},
    {path: 'about', component: AboutOneComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'prevention', component: PreventionComponent},
    {path: 'doctors', component: DoctorsComponent},
    {path: 'appointment', component: AppointmentComponent},
    {path: 'spread', component: SpreadComponent},
    {path: 'outbreak', component: OutbreakComponent},
    {path: 'products', component: ProductsComponent},
    {path: 'cart', component: CartComponent},
    {path: 'checkout', component: CheckoutComponent},
    {path: 'products-details', component: ProductsDetailsComponent},
    {path: 'faq', component: FaqComponent},
    {path: 'blog-two', component: BlogTwoComponent},
    {path: 'error', component: ErrorComponent},
    {path: 'coming-soon', component: ComingSoonComponent},
    {path: ':key', component: BlogDetailsComponent},
    {path: '**', component: ErrorComponent},



];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
    exports: [RouterModule]
})
export class AppRoutingModule { }