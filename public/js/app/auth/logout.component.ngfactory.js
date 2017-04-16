/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from './logout.component';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from './auth.service';
import * as import9 from '@angular/router/src/router';
import * as import10 from '@angular/core/src/metadata/view';
import * as import11 from '@angular/core/src/linker/component_factory';
var renderType_LogoutComponent_Host = null;
var _View_LogoutComponent_Host0 = (function (_super) {
    __extends(_View_LogoutComponent_Host0, _super);
    function _View_LogoutComponent_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_LogoutComponent_Host0, renderType_LogoutComponent_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_LogoutComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('app-logout', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_LogoutComponent0(this.viewUtils, this.injector(0), this._appEl_0);
        this._LogoutComponent_0_4 = new import3.LogoutComponent(this.parentInjector.get(import8.AuthService), this.parentInjector.get(import9.Router));
        this._appEl_0.initComponent(this._LogoutComponent_0_4, [], compView_0);
        compView_0.create(this._LogoutComponent_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_LogoutComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import3.LogoutComponent) && (0 === requestNodeIndex))) {
            return this._LogoutComponent_0_4;
        }
        return notFoundResult;
    };
    return _View_LogoutComponent_Host0;
}(import1.AppView));
function viewFactory_LogoutComponent_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_LogoutComponent_Host === null)) {
        (renderType_LogoutComponent_Host = viewUtils.createRenderComponentType('', 0, import10.ViewEncapsulation.None, [], {}));
    }
    return new _View_LogoutComponent_Host0(viewUtils, parentInjector, declarationEl);
}
export var LogoutComponentNgFactory = new import11.ComponentFactory('app-logout', viewFactory_LogoutComponent_Host0, import3.LogoutComponent);
var styles_LogoutComponent = [];
var renderType_LogoutComponent = null;
var _View_LogoutComponent0 = (function (_super) {
    __extends(_View_LogoutComponent0, _super);
    function _View_LogoutComponent0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_LogoutComponent0, renderType_LogoutComponent, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_LogoutComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._text_0 = this.renderer.createText(parentRenderNode, '\n        ', null);
        this._el_1 = this.renderer.createElement(parentRenderNode, 'div', null);
        this.renderer.setElementAttribute(this._el_1, 'class', 'col-md-8 col-md-offset-2');
        this._text_2 = this.renderer.createText(this._el_1, '\n            ', null);
        this._el_3 = this.renderer.createElement(this._el_1, 'button', null);
        this.renderer.setElementAttribute(this._el_3, 'class', 'btn btn-danger');
        this._text_4 = this.renderer.createText(this._el_3, 'Logout', null);
        this._text_5 = this.renderer.createText(this._el_1, '\n        ', null);
        this._text_6 = this.renderer.createText(parentRenderNode, '\n    ', null);
        var disposable_0 = this.renderer.listen(this._el_3, 'click', this.eventHandler(this._handle_click_3_0.bind(this)));
        this.init([], [
            this._text_0,
            this._el_1,
            this._text_2,
            this._el_3,
            this._text_4,
            this._text_5,
            this._text_6
        ], [disposable_0], []);
        return null;
    };
    _View_LogoutComponent0.prototype._handle_click_3_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.onLogout() !== false);
        return (true && pd_0);
    };
    return _View_LogoutComponent0;
}(import1.AppView));
export function viewFactory_LogoutComponent0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_LogoutComponent === null)) {
        (renderType_LogoutComponent = viewUtils.createRenderComponentType('C:/Users/Nikhil/Desktop/AngularApps/messenger/assets/app/auth/logout.component.ts class LogoutComponent - inline template', 0, import10.ViewEncapsulation.None, styles_LogoutComponent, {}));
    }
    return new _View_LogoutComponent0(viewUtils, parentInjector, declarationEl);
}
//# sourceMappingURL=logout.component.ngfactory.js.map