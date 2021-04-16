import { environment } from 'src/environments/environment';

export class UrlHelper {

    static API_URL: string = environment.apiUrl;
    static SING_URL: string = UrlHelper.API_URL + 'api/auth';

    static SIGNIN: string = UrlHelper.SING_URL + '/signin';
    static SIGNUP: string = UrlHelper.SING_URL + '/signup';

}