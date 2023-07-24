import { MessagesRepository } from './Core/Messages/MessagesRepository'
import { Router } from './Routing/Router'
import { RouterRepository } from './Routing/RouterRepository'
import { UserModel } from './Authentication/UserModel'
import { NavigationRepository } from './Navigation/NavigationRepository'
import { AppPresenter } from './AppPresenter'
import { LoginRegisterPresenter } from "./Authentication/LoginRegisterPresenter.js";
import { XVueTestClass } from "./Authentication/XVueTestClass.js";
import { AuthenticationRepository } from "@/tests/Helpers/Authentication/AuthenticationRepository.js";
import { container } from './container.ts'
import { xVue } from '@/xVue'

import { beforeAction } from "@/utils";

beforeAction(XVueTestClass.prototype.init, (vue) => {
  console.log('before XVueTestClass')
})

export class BaseIOC {
  container

  constructor() {
    this.container = container
  }

  buildBaseTemplate = () => {

    this.container.bind(MessagesRepository).to(MessagesRepository).inSingletonScope().onActivation(xVue);
    this.container.bind(Router).to(Router).inSingletonScope().onActivation(xVue);
    this.container.bind(RouterRepository).to(RouterRepository).inSingletonScope().onActivation(xVue);
    this.container.bind(NavigationRepository).to(NavigationRepository).inSingletonScope().onActivation(xVue);
    this.container.bind(UserModel).to(UserModel).inSingletonScope().onActivation(xVue);
    this.container.bind(AppPresenter).to(AppPresenter).inSingletonScope().onActivation(xVue);
    this.container.bind(LoginRegisterPresenter).to(LoginRegisterPresenter).inSingletonScope().onActivation(xVue);
    this.container.bind(XVueTestClass).to(XVueTestClass).inSingletonScope().onActivation(xVue);
    this.container.bind(AuthenticationRepository).to(AuthenticationRepository).inSingletonScope().onActivation(xVue);

    return this.container
  }
}
