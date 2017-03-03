"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var EventThumbnailComponent = (function () {
    function EventThumbnailComponent() {
        this.someProperty = "some value";
        this.eventClick = new core_1.EventEmitter();
    }
    EventThumbnailComponent.prototype.handleClickMe = function () {
        this.eventClick.emit(this.event.name);
    };
    EventThumbnailComponent.prototype.logFoo = function () {
        console.log('foo');
    };
    EventThumbnailComponent.prototype.getStartTimeClass = function () {
        var isEarlyStart = this.event && this.event.time === '8:00 am';
        return { green: isEarlyStart, bold: isEarlyStart };
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], EventThumbnailComponent.prototype, "event", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], EventThumbnailComponent.prototype, "eventClick", void 0);
    EventThumbnailComponent = __decorate([
        core_1.Component({
            selector: 'event-thumbnail',
            templateUrl: 'app/events/event-thumbnail.component.html',
            styles: ['.pad-left{margin-left: 120px}' +
                    '.well div{color: #bbb' +
                    '.thumbnail {min-height:210px}' +
                    '.green {color:red !important;}'
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], EventThumbnailComponent);
    return EventThumbnailComponent;
}());
exports.EventThumbnailComponent = EventThumbnailComponent;
//# sourceMappingURL=event-thumbnail.component.js.map