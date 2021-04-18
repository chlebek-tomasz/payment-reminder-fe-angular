import { environment } from 'src/environments/environment';

export class UrlHelper {

    static API_URL: string = environment.apiUrl;
    static SING_URL: string = UrlHelper.API_URL + 'api/auth';
    static API: string = UrlHelper.API_URL + 'api/v1/';

    static SIGNIN: string = UrlHelper.SING_URL + '/signin';
    static SIGNUP: string = UrlHelper.SING_URL + '/signup';

    static PAYMENT: string = UrlHelper.API + 'payments/';
    static PAYMENT_USER: string = UrlHelper.PAYMENT + 'users/';
    static PAYMENT_STATISCTIC: string = UrlHelper.PAYMENT + 'statistics/users/';

    static USER: string = UrlHelper.API + 'users/';
}