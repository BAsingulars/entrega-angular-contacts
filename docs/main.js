(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/coniconi/Documents/GitHub/entrega-angular-contacts/src/main.ts */"zUnb");


/***/ }),

/***/ "2MiI":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_contacts_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/contacts.service */ "dkb4");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");




function HeaderComponent_p_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const letter_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](letter_r2);
} }
function HeaderComponent_div_41_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HeaderComponent_div_41_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.newContact.name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HeaderComponent_div_41_Template_input_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.newContact.email = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Phone number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HeaderComponent_div_41_Template_input_ngModelChange_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.newContact.phoneNumber = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Image file");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HeaderComponent_div_41_Template_input_ngModelChange_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.newContact.image = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_41_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.addContact(ctx_r8.newContact); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Submit New Contact ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_41_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.openModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.newContact.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.newContact.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.newContact.phoneNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.newContact.image);
} }
class HeaderComponent {
    constructor(contactService) {
        this.contactService = contactService;
        this.alphabetList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
        this.newContact = {
            name: "",
            email: "",
            phoneNumber: "",
            image: ""
        };
    }
    ngOnInit() {
        this.display = false;
    }
    openModal() {
        /* shows modal or not */
        this.display = !this.display;
    }
    addContact(contact) {
        // add contact to contacts list
        this.contactService.addContact(contact);
        console.log(contact);
        // clear inputs
        this.handleClear();
        this.openModal();
    }
    handleClear() {
        this.newContact.name = "";
        this.newContact.email = "";
        this.newContact.phoneNumber = "";
        this.newContact.image = "";
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_contacts_service__WEBPACK_IMPORTED_MODULE_1__["ContactsService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 42, vars: 2, consts: [[1, "flex", "column"], ["href", "#"], ["src", "../assets/svg/nav_dashboard_icon.svg", "alt", ""], ["src", "../assets/svg/nav_filter_icon.svg", "alt", ""], ["src", "../assets/svg/nav_list_icon.svg", "alt", ""], ["href", "#", 1, "active"], ["src", "../assets/svg/book_icon.svg", "alt", ""], ["id", "contact-buttons", 1, "flex", "row", "space-between"], ["id", "search-bar"], ["src", "/assets/svg/lupa_blue.svg", "alt", ""], ["type", "text", "placeholder", "Search"], [1, "flex", "row"], ["id", "addContact", 1, "side-bg", "hover", "button-top", 3, "click"], [1, "buttons"], [1, "accent-bg-negative", "hover", "button-top"], ["src", "/assets/svg/filter.svg", "alt", ""], [1, "accent-bg", "hover", "button-top"], ["src", "/assets/svg/lupa_white.svg", "alt", ""], ["id", "sorting-bar"], [1, "alphabetical"], ["width", "15", "height", "16", "viewBox", "0 0 15 16", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["clip-path", "url(#clip0)"], ["d", "M10.5 14.5L10.1233 14.8288C10.2181 14.9374 10.3553 14.9999 10.4996 15C10.6439 15.0001 10.7811 14.9379 10.8762 14.8294L10.5 14.5ZM11 1C11 0.723858 10.7762 0.5 10.5 0.5C10.2239 0.5 10 0.723858 10 1H11ZM14.3978 10.8078C14.5797 10.6 14.5588 10.2842 14.351 10.1022C14.1433 9.92032 13.8274 9.94126 13.6455 10.149L14.3978 10.8078ZM7.38613 10.1712C7.20456 9.96319 6.88871 9.94171 6.68065 10.1233C6.47259 10.3048 6.45111 10.6207 6.63267 10.8288L7.38613 10.1712ZM11 4V1H10V4H11ZM10 1L10 14.5L11 14.5L11 1L10 1ZM12.8831 12.5375L14.3978 10.8078L13.6455 10.149L12.1308 11.8787L12.8831 12.5375ZM13.6455 10.149L10.1239 14.1706L10.8762 14.8294L14.3978 10.8078L13.6455 10.149ZM10.8767 14.1712L7.38613 10.1712L6.63267 10.8288L10.1233 14.8288L10.8767 14.1712ZM6.63267 10.8288L8.12327 12.5369L8.87673 11.8794L7.38613 10.1712L6.63267 10.8288Z", "fill", "#C1C7F7"], ["d", "M4.941 14.181C5.067 14.181 5.169 14.22 5.247 14.298C5.331 14.37 5.373 14.466 5.373 14.586C5.373 14.706 5.331 14.805 5.247 14.883C5.163 14.961 5.061 15 4.941 15H0.837C0.711 15 0.603 14.958 0.513 14.874C0.429 14.784 0.387 14.685 0.387 14.577C0.387 14.481 0.42 14.391 0.486 14.307L4.158 9.519H1.143C1.017 9.519 0.912 9.48 0.828 9.402C0.75 9.324 0.711 9.225 0.711 9.105C0.711 8.985 0.75 8.889 0.828 8.817C0.912 8.739 1.017 8.7 1.143 8.7H4.995C5.115 8.7 5.223 8.742 5.319 8.826C5.415 8.904 5.463 9.003 5.463 9.123C5.463 9.207 5.43 9.297 5.364 9.393L1.692 14.181H4.941Z", "fill", "#C1C7F7"], ["d", "M5.589 6.442C5.607 6.496 5.616 6.553 5.616 6.613C5.616 6.733 5.574 6.832 5.49 6.91C5.412 6.988 5.319 7.027 5.211 7.027C5.127 7.027 5.049 7.003 4.977 6.955C4.911 6.901 4.857 6.829 4.815 6.739L4.257 5.416H1.476L0.927 6.748C0.897 6.838 0.846 6.907 0.774 6.955C0.708 7.003 0.633 7.027 0.549 7.027C0.423 7.027 0.327 6.994 0.261 6.928C0.195 6.862 0.162 6.772 0.162 6.658C0.162 6.634 0.168 6.586 0.18 6.514L2.475 0.952C2.517 0.856 2.574 0.784 2.646 0.736C2.724 0.682 2.811 0.661 2.907 0.673C2.997 0.673 3.078 0.697 3.15 0.745C3.222 0.793 3.273 0.862 3.303 0.952L5.589 6.442ZM3.915 4.597L2.862 2.077L1.818 4.597H3.915Z", "fill", "#C1C7F7"], ["id", "clip0"], ["width", "15", "height", "16", "fill", "white"], [1, "vertical"], [1, "corner"], [1, "date"], ["width", "17", "height", "16", "viewBox", "0 0 17 16", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M1 5.57353H16V4.57353H1V5.57353ZM3.7143 -1.92756e-06L3.71429 3.41912L4.71429 3.41912L4.7143 1.92756e-06L3.7143 -1.92756e-06ZM12.2857 -1.97239e-06L12.2857 3.41912L13.2857 3.41912L13.2857 1.97239e-06L12.2857 -1.97239e-06ZM2.07143 15.5H14.9286V14.5H2.07143V15.5ZM14.9286 15.5C15.81 15.5 16.5 14.7686 16.5 13.8971H15.5C15.5 14.2438 15.2306 14.5 14.9286 14.5V15.5ZM16.5 13.8971V2.86765H15.5V13.8971H16.5ZM16.5 2.86765C16.5 1.99614 15.81 1.26471 14.9286 1.26471V2.26471C15.2306 2.26471 15.5 2.52089 15.5 2.86765H16.5ZM14.9286 1.26471H2.07143V2.26471H14.9286V1.26471ZM2.07143 1.26471C1.18999 1.26471 0.500007 1.99614 0.500007 2.86765H1.50001C1.50001 2.52089 1.76941 2.26471 2.07143 2.26471V1.26471ZM0.500007 2.86765V13.8971H1.50001V2.86765H0.500007ZM0.500007 13.8971C0.500007 14.7686 1.19 15.5 2.07143 15.5V14.5C1.7694 14.5 1.50001 14.2438 1.50001 13.8971H0.500007ZM2.92858 7.22794H5.50001V6.22794H2.92858V7.22794ZM5.32143 7.05882V8.60294H6.32143V7.05882H5.32143ZM5.50001 8.43382H2.92858V9.43382H5.50001V8.43382ZM3.10715 8.60294V7.05882H2.10715V8.60294H3.10715ZM2.92858 8.43382C3.04076 8.43382 3.10715 8.5233 3.10715 8.60294H2.10715C2.10715 9.04806 2.46135 9.43382 2.92858 9.43382V8.43382ZM5.32143 8.60294C5.32143 8.5233 5.38782 8.43382 5.50001 8.43382V9.43382C5.96723 9.43382 6.32143 9.04807 6.32143 8.60294H5.32143ZM5.50001 7.22794C5.38782 7.22794 5.32143 7.13846 5.32143 7.05882H6.32143C6.32143 6.6137 5.96723 6.22794 5.50001 6.22794V7.22794ZM2.92858 6.22794C2.46135 6.22794 2.10715 6.6137 2.10715 7.05882H3.10715C3.10715 7.13846 3.04076 7.22794 2.92858 7.22794V6.22794ZM7.21429 7.22794H9.78572V6.22794H7.21429V7.22794ZM9.60715 7.05882V8.60294H10.6071V7.05882H9.60715ZM9.78572 8.43382H7.21429V9.43382H9.78572V8.43382ZM7.39286 8.60294V7.05882H6.39286V8.60294H7.39286ZM7.21429 8.43382C7.32648 8.43382 7.39286 8.5233 7.39286 8.60294H6.39286C6.39286 9.04806 6.74706 9.43382 7.21429 9.43382V8.43382ZM9.60715 8.60294C9.60715 8.5233 9.67353 8.43382 9.78572 8.43382V9.43382C10.2529 9.43382 10.6071 9.04807 10.6071 8.60294H9.60715ZM9.78572 7.22794C9.67353 7.22794 9.60715 7.13846 9.60715 7.05882H10.6071C10.6071 6.6137 10.2529 6.22794 9.78572 6.22794V7.22794ZM7.21429 6.22794C6.74706 6.22794 6.39286 6.6137 6.39286 7.05882H7.39286C7.39286 7.13846 7.32648 7.22794 7.21429 7.22794V6.22794ZM11.5 7.22794H14.0714V6.22794H11.5V7.22794ZM13.8929 7.05882V8.60294H14.8929V7.05882H13.8929ZM14.0714 8.43382H11.5V9.43382H14.0714V8.43382ZM11.6786 8.60294V7.05882H10.6786V8.60294H11.6786ZM11.5 8.43382C11.6122 8.43382 11.6786 8.5233 11.6786 8.60294H10.6786C10.6786 9.04806 11.0328 9.43382 11.5 9.43382V8.43382ZM13.8929 8.60294C13.8929 8.5233 13.9592 8.43382 14.0714 8.43382V9.43382C14.5387 9.43382 14.8929 9.04807 14.8929 8.60294H13.8929ZM14.0714 7.22794C13.9592 7.22794 13.8929 7.13846 13.8929 7.05882H14.8929C14.8929 6.6137 14.5387 6.22794 14.0714 6.22794V7.22794ZM11.5 6.22794C11.0328 6.22794 10.6786 6.6137 10.6786 7.05882H11.6786C11.6786 7.13846 11.6122 7.22794 11.5 7.22794V6.22794ZM2.92858 10.5368H5.50001V9.53677H2.92858V10.5368ZM5.32143 10.3676V11.9118H6.32143V10.3676H5.32143ZM5.50001 11.7426H2.92858V12.7426H5.50001V11.7426ZM3.10715 11.9118V10.3676H2.10715V11.9118H3.10715ZM2.92858 11.7426C3.04076 11.7426 3.10715 11.8321 3.10715 11.9118H2.10715C2.10715 12.3569 2.46135 12.7426 2.92858 12.7426V11.7426ZM5.32143 11.9118C5.32143 11.8321 5.38782 11.7426 5.50001 11.7426V12.7426C5.96723 12.7426 6.32143 12.3569 6.32143 11.9118H5.32143ZM5.50001 10.5368C5.38782 10.5368 5.32143 10.4473 5.32143 10.3676H6.32143C6.32143 9.92253 5.96723 9.53677 5.50001 9.53677V10.5368ZM2.92858 9.53677C2.46135 9.53677 2.10715 9.92253 2.10715 10.3676H3.10715C3.10715 10.4473 3.04076 10.5368 2.92858 10.5368V9.53677ZM7.21429 10.5368H9.78572V9.53677H7.21429V10.5368ZM9.60715 10.3676V11.9118H10.6071V10.3676H9.60715ZM9.78572 11.7426H7.21429V12.7426H9.78572V11.7426ZM7.39286 11.9118V10.3676H6.39286V11.9118H7.39286ZM7.21429 11.7426C7.32648 11.7426 7.39286 11.8321 7.39286 11.9118H6.39286C6.39286 12.3569 6.74706 12.7426 7.21429 12.7426V11.7426ZM9.60715 11.9118C9.60715 11.8321 9.67353 11.7426 9.78572 11.7426V12.7426C10.2529 12.7426 10.6071 12.3569 10.6071 11.9118H9.60715ZM9.78572 10.5368C9.67353 10.5368 9.60715 10.4473 9.60715 10.3676H10.6071C10.6071 9.92253 10.2529 9.53677 9.78572 9.53677V10.5368ZM7.21429 9.53677C6.74706 9.53677 6.39286 9.92253 6.39286 10.3676H7.39286C7.39286 10.4473 7.32648 10.5368 7.21429 10.5368V9.53677Z", "fill", "black"], [1, "letters"], ["class", "letter", 4, "ngFor", "ngForOf"], ["id", "modal", 4, "ngIf"], [1, "letter"], ["id", "modal"], ["for", "contact-name"], ["id", "contact-name", "name", "name", "type", "text", "placeholder", "Jane Doe", 3, "ngModel", "ngModelChange"], ["for", "contact-email"], ["id", "contact-email", "name", "email", "type", "email", "placeholder", "e-mail@address.com", 3, "ngModel", "ngModelChange"], ["for", "contact-phone"], ["id", "contact-phone", "name", "phone", "type", "phone", "placeholder", "123 456 789", 3, "ngModel", "ngModelChange"], ["for", "contact-image"], ["id", "contact-image", "name", "image", "type", "text", "placeholder", "image.png", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "side-bg", "button-round-corner", "bold", "uppercase", 3, "click"], [1, "button-close", 3, "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "section", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_14_listener() { return ctx.openModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " add contact ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "svg", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "g", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "path", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "path", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "path", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "defs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "clipPath", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "rect", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Alphabetical sorting");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "svg", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "path", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Date sorting");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "article", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, HeaderComponent_p_40_Template, 2, 1, "p", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, HeaderComponent_div_41_Template, 22, 4, "div", 34);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.alphabetList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.display);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]], styles: ["@import url(\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css\");\n@import url(\"https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;600&display=swap\");\n\n\n\n\n\nnav[_ngcontent-%COMP%] {\n  \n  grid-row: 1/3;\n  grid-column: 1/2;\n  width: 7rem;\n  height: 98vh;\n  border-radius: 2.5rem 0 0 2.5rem;\n  background: #ffffff;\n}\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  line-height: 4.2rem;\n  margin: 2.5rem;\n  width: 3.9rem;\n  height: 3.9rem;\n  text-align: center;\n}\nnav[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  box-shadow: 0 0.5rem 1rem #ddd;\n  border-radius: 0.5rem;\n}\nsection[_ngcontent-%COMP%] {\n  \n  grid-row: 1/2;\n  grid-column: 2/4;\n}\n#search-bar[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 0.9rem;\n  display: flex;\n  flex-flow: row nowrap;\n  justify-items: center;\n  justify-content: center;\n  align-items: center;\n  padding: 1.5rem 0 1.5rem 1.5rem;\n}\n#search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  color: #2531B6;\n  background: none;\n  margin-left: 1rem;\n}\n#search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #202020;\n}\n.button-top[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-weight: 600;\n  font-size: 1.2rem;\n  padding: 0.5rem 1.5rem;\n  min-width: calc(11.6rem / 2);\n  max-width: 15rem;\n  border-radius: 1.2rem;\n  height: 3.5rem;\n}\n#sorting-bar[_ngcontent-%COMP%] {\n  background-color: #1E2BA1;\n  color: #ffffff;\n  \n  display: none;\n  border-radius: 2.7rem;\n  overflow: hidden;\n  width: 12.8rem;\n  height: 70rem;\n}\n#sorting-bar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-family: \"Quicksand\", sans-serif;\n  color: #ffffff;\n  padding: 0.5rem;\n  background: none;\n}\n#sorting-bar[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  margin: 0 0 0.9rem 0.5rem;\n}\n#sorting-bar[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  fill: #c1c7f7;\n}\n#sorting-bar[_ngcontent-%COMP%]   .alphabetical[_ngcontent-%COMP%], #sorting-bar[_ngcontent-%COMP%]   .corner[_ngcontent-%COMP%], #sorting-bar[_ngcontent-%COMP%]   .letters[_ngcontent-%COMP%] {\n  background: #2531B6;\n}\n#sorting-bar[_ngcontent-%COMP%]   .corner[_ngcontent-%COMP%] {\n  grid-row: 2/3;\n  grid-column: 1/2;\n}\n#sorting-bar[_ngcontent-%COMP%]   .alphabetical[_ngcontent-%COMP%], #sorting-bar[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\n  padding: 3rem 1.5rem;\n  cursor: pointer;\n}\n#sorting-bar[_ngcontent-%COMP%]   .alphabetical[_ngcontent-%COMP%] {\n  grid-row: 1/2;\n  grid-column: 1/2;\n  border-radius: 2.7rem 0 0 2.7rem;\n}\n#sorting-bar[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\n  grid-row: 2/3;\n  grid-column: 1/2;\n  border-radius: 0 2.7rem 0 0;\n  background: #1E2BA1;\n}\n#sorting-bar[_ngcontent-%COMP%]   .letters[_ngcontent-%COMP%] {\n  grid-row: 1/3;\n  grid-column: 2/3;\n  overflow-y: auto;\n  text-align: center;\n  padding: 0 2.1rem;\n}\n#sorting-bar[_ngcontent-%COMP%]   .letter[_ngcontent-%COMP%] {\n  padding: 0.9rem;\n  border: 0.2rem solid #2531B6;\n}\n#sorting-bar[_ngcontent-%COMP%]   .letter[_ngcontent-%COMP%]:hover {\n  background: none;\n  border: 0.2rem solid #ef9fb7;\n  border-radius: 0.9rem;\n}\n#sorting-bar[_ngcontent-%COMP%]   .vertical[_ngcontent-%COMP%] {\n  writing-mode: vertical-rl;\n  transform: rotate(180deg);\n  white-space: nowrap;\n}\nform[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column nowrap;\n  justify-items: flex-start;\n  justify-content: space-evenly;\n  align-items: flex-start;\n  width: 40rem;\n  background: #ffffff;\n  padding: 2.5rem 5rem;\n  border-radius: 1rem;\n  position: fixed;\n  top: 10vh;\n  left: calc(50% - 20rem);\n  \n}\nform[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #2531B6;\n}\nform[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n}\nform[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  align-self: center;\n  margin: 2rem;\n}\n.button-close[_ngcontent-%COMP%] {\n  width: 5rem;\n  height: 5rem;\n  font-size: 2.5rem;\n  border-radius: 2.5rem;\n  background: #ddd;\n  position: absolute;\n  top: 0;\n  right: 0;\n  outline: none;\n  vertical-align: middle;\n}\n.button-close[_ngcontent-%COMP%]:active {\n  background: #ef9fb7;\n  color: #ffffff;\n}\n#modal[_ngcontent-%COMP%] {\n  background: rgba(32, 32, 32, 0.5);\n  width: 100vw;\n  height: 100vh;\n  position: fixed;\n  top: 0;\n  left: 0;\n}\n.buttons[_ngcontent-%COMP%] {\n  display: none;\n}\n\n@media (min-width: 768px) {\n  .buttons[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n\n@media (min-width: 990px) {\n  #sorting-bar[_ngcontent-%COMP%] {\n    \n    grid-row: 2/3;\n    grid-column: 2/3;\n    display: grid;\n    grid-gap: 0;\n    grid-template-rows: 21.5rem 48.5rem;\n    grid-template-columns: 5rem 7.4rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL192YXJpYWJsZXMuc2NzcyIsIi4uLy4uLy4uLy4uL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSx5RkFBQTtBQUNBLCtGQUFBO0FBRVIsc0RBQUE7QUFDQSxXQUFBO0FBV0EsY0FBQTtBQVNBLFVBQUE7QUFJQSxtREFBQTtBQzFCQTtFQUNFLDRCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VEZ0dFLFdBaEZRO0VBaUZSLFlDL0Z3QjtFQUMxQixnQ0FBQTtFQUNBLG1CRENNO0FDS1I7QUFKRTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtFRHdGQSxhQ3ZGYztFRHdGZCxjQ3hGc0I7RUFDdEIsa0JBQUE7QUFPSjtBQUxJO0VBQ0UsOEJERk87RUNHUCxxQkFBQTtBQU9OO0FBRkE7RUFDRSw0QkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQUtGO0FBRkE7RUFDRSxtQkRyQk07RUNzQk4scUJBQUE7RUQwQ0UsYUFBQTtFQUNBLHFCQUFBO0VBQ0EscUJDM0N5QjtFRDRDekIsdUJDNUNpQztFRDZDakMsbUJDN0N5QztFQUMzQywrQkFBQTtBQVNGO0FBTkU7RUFDRSxjRGpDVztFQ2tDWCxnQkFBQTtFQUNBLGlCQUFBO0FBUUo7QUFOSTtFQUNFLGNEbENFO0FDMENSO0FBSEE7RUFDRSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7RUFFQSxxQkFBQTtFQUNBLGNBQUE7QUFLRjtBQUZBO0VBQ0UseUJEdkRVO0VDd0RWLGNEcERNO0VDc0ROLHdCQUFBO0VBQ0EsYUFBQTtFQUVBLHFCQUFBO0VBQ0EsZ0JBQUE7RURpQ0UsY0NoQ1k7RURpQ1osYUNqQ3FCO0FBSXpCO0FBRkU7RUFDRSxvQ0Q5Q0c7RUMrQ0gsY0QvREk7RUNpRUosZUFBQTtFQUNBLGdCQUFBO0FBR0o7QUFDSTtFQUNFLHlCQUFBO0FBQ047QUFBTTtFQUNFLGFBQUE7QUFFUjtBQUdFOzs7RUFHRSxtQkR0Rlc7QUNxRmY7QUFJRTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtBQUZKO0FBS0U7O0VBRUUsb0JBQUE7RUFDQSxlQUFBO0FBSEo7QUFNRTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGdDQUFBO0FBSko7QUFPRTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJEN0dRO0FDd0daO0FBUUU7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFFQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFQSjtBQVVFO0VBQ0UsZUFBQTtFQUNBLDRCQUFBO0FBUko7QUFVSTtFQUNFLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxxQkFBQTtBQVJOO0FBWUU7RUFDRSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUFWSjtBQWNBO0VEdkVJLGFBQUE7RUFDQSx3QkFBQTtFQUNBLHlCQ3NFNEI7RURyRTVCLDZCQ3FFd0M7RURwRXhDLHVCQ29Fc0Q7RUFDeEQsWUFBQTtFQUNBLG1CRDFJTTtFQzJJTixvQkFBQTtFQUNBLG1CQUFBO0VBRUEsZUFBQTtFQUNBLFNBQUE7RUFDQSx1QkFBQTtFQUF5QixnQ0FBQTtBQVAzQjtBQVNFO0VBQ0UsZ0JBQUE7RUFDQSxjRHpKVztBQ2tKZjtBQVVFO0VBQVEsV0FBQTtBQVBWO0FBU0U7RUFDRSxrQkFBQTtFQUNBLFlBQUE7QUFQSjtBQVdBO0VEcEVJLFdDcUVZO0VEcEVaLFlDb0VrQjtFQUNwQixpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBUEY7QUFTRTtFQUNFLG1CRDlLVTtFQytLVixjRDVLSTtBQ3FLUjtBQVdBO0VBQ0UsaUNBQUE7RUR0RkUsWUN1Rlk7RUR0RlosYUNzRm1CO0VBQ3JCLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtBQVBGO0FBVUE7RUFBVyxhQUFBO0FBTlg7QURoSlEsMkNBQUE7QUFDQTtFQ3dKTjtJQUFXLGNBQUE7RUFIWDtBQUNGO0FEM0pRLDJDQUFBO0FBQ0E7RUNnS047SUFDRSw0QkFBQTtJQUNBLGFBQUE7SUFDQSxnQkFBQTtJRHhJQSxhQUFBO0lBQ0EsV0N5SWM7SUFDZCxtQ0FBQTtJQUNBLGtDQUFBO0VBRkY7QUFDRiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChcImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2ZvbnQtYXdlc29tZS81LjE1LjMvY3NzL2FsbC5taW4uY3NzXCIpO1xuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UXVpY2tzYW5kOndnaHRAMzAwOzQwMDs2MDAmZGlzcGxheT1zd2FwJyk7XG5cbi8qKioqKioqKioqKioqKioqKioqKiogdmFyaWFibGVzICoqKioqKioqKioqKioqKioqKioqKi9cbi8qIGNvbG9ycyAqL1xuJGFjY2VudC1jb2xvcjogIzI1MzFCNjtcbiRkYXJrLWJsdWU6ICMxRTJCQTE7XG4kc2lkZS1jb2xvcjogICNlZjlmYjc7XG4kbGlnaHQtc3RlZWwtYmx1ZTogI0FGQkVEMjtcbiRibGFjazogIzIwMjAyMDtcbiR3aGl0ZTogI2ZmZmZmZjtcbiRsaWdodC1ncmF5OiAjZGRkO1xuJGJnLWNvbG9yOiAjZjNmNGZiO1xuJGJnLW1haW46ICNmOGZhZmI7XG5cbi8qIHV0aWxpdGllcyAqL1xuJGJveC1zaGFkb3c6IDAgLjVyZW0gMXJlbSAkbGlnaHQtZ3JheTtcbiRib3JkZXI6IDFweCBzb2xpZCAkYWNjZW50LWNvbG9yO1xuJGNvbnRhY3QtaW1hZ2Utc2l6ZTogNnJlbTtcbiRidXR0b24tc2l6ZTogY2FsYyg2cmVtIC8gMik7XG4kYnV0dG9uLXNpemUtbDogNnJlbTtcbiRuYXYtd2lkdGg6IDdyZW07XG4kZmF2ZS1jYXJkLWhlaWdodDogMTZyZW07XG5cbi8qIGZvbnRzICovXG4kaGVsdmV0aWNhOiBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4kZm9udDogJ1F1aWNrc2FuZCcsIHNhbnMtc2VyaWY7XG5cbi8qKioqKioqKioqKioqKioqKioqKiogbWl4aW5zICoqKioqKioqKioqKioqKioqKioqKi9cbi8vIGJyZWFrcG9pbnRzIChtb2JpbGUtZmlyc3QpXG5AbWl4aW4gYnJlYWtwb2ludCgkcG9pbnQpIHtcbiAgICBAaWYgJHBvaW50ID09ICdkZXNrdG9wLXh4bCcge1xuICAgICAgIC8qIFhYLUxhcmdlIGRldmljZXMgKGxhcmdlciBkZXNrdG9wcywgMTQwMHB4IGFuZCB1cCkgKi9cbiAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTQwMHB4KSB7IEBjb250ZW50IDsgfVxuICAgfVxuICAgQGVsc2UgaWYgJHBvaW50ID09ICdkZXNrdG9wLXhsJyB7XG4gICAgICAgIC8qIFgtTGFyZ2UgZGV2aWNlcyAobGFyZ2UgZGVza3RvcHMsIDEyMDBweCBhbmQgdXApICovXG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHsgQGNvbnRlbnQgOyB9XG4gICAgfVxuICAgIEBlbHNlIGlmICRwb2ludCA9PSAnZGVza3RvcCcge1xuICAgICAgICAvKiBMYXJnZSBkZXZpY2VzIChkZXNrdG9wcywgOTkwcHggYW5kIHVwKSAqL1xuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogOTkwcHgpIHsgQGNvbnRlbnQgOyB9XG4gICB9XG4gICAgIEBlbHNlIGlmICRwb2ludCA9PSAndGFibGV0JyB7XG4gICAgICAgIC8qIE1lZGl1bSBkZXZpY2VzICh0YWJsZXRzLCA3NjhweCBhbmQgdXApICovXG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgeyBAY29udGVudCA7IH1cbiAgIH1cbiAgICBAZWxzZSBpZiAkcG9pbnQgPT0gJ21vYmlsZScge1xuICAgICAgICAvKiBTbWFsbCBkZXZpY2VzIChsYW5kc2NhcGUgcGhvbmVzLCA1NzZweCBhbmQgdXApICovXG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkgeyBAY29udGVudCA7IH1cbiAgIH1cbiAgIEBlbHNlIGlmICRwb2ludCA9PSAnbW9iaWxlb25seScge1xuICAgICAgICAvKiBTbWFsbCBkZXZpY2VzIChzbWFsbCBwaG9uZXMsIDMyMHB4IGFuZCB1cCkgKi9cbiAgICAgICAgLy9zZXJpb3VzbHkgd2hvIHVzZXMgYSBwaG9uZSBzbWFsbGVyIHRoYW4gdGhpcyBpbiAyMDIxXG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkgeyBAY29udGVudCA7IH1cbiAgIH1cbn1cblxuLy9ncmlkIHdpdGggc2FtZSBjb2x1bW4vcm93IHNpemVcbkBtaXhpbiBncmlkLXNpemUgKCRjb2x1bW5OdW1iZXIsICRjb2x1bW5TaXplLCAkcm93TnVtYmVyLCAkcm93U2l6ZSwgICRncmlkR2FwKSB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgkY29sdW1uTnVtYmVyLCAkY29sdW1uU2l6ZSk7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoJHJvd051bWJlciwgJHJvd1NpemUpO1xuICAgIGdyaWQtZ2FwOiAkZ3JpZEdhcDtcbn1cblxuLy9ncmlkIHdpdGggZGlmZmVyZW50IHZhbHVlc1xuQG1peGluIGdyaWQgKCRncmlkR2FwKSB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLWdhcDogJGdyaWRHYXA7XG59XG5cbi8vZmxleCBjZW50ZXJlZFxuQG1peGluIGZsZXgoJGRpcmVjdGlvbiwgJHdyYXAsICRqdXN0aWZ5SXRlbXMsICRqdXN0aWZ5Q29udGVudCwgJGFsaWduSXRlbXMpIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogJGRpcmVjdGlvbiAkd3JhcDtcbiAgICBqdXN0aWZ5LWl0ZW1zOiAkanVzdGlmeUl0ZW1zO1xuICAgIGp1c3RpZnktY29udGVudDogJGp1c3RpZnlDb250ZW50O1xuICAgIGFsaWduLWl0ZW1zOiAkYWxpZ25JdGVtcztcbn1cblxuQG1peGluIGFjY2VudC1jb2xvcigkY29sb3IsICRuZWdhdGl2ZTpmYWxzZSkge1xuICAgIEBpZiAkbmVnYXRpdmUge1xuICAgICAgICBjb2xvcjogJGNvbG9yO1xuICAgICAgICBiYWNrZ3JvdW5kOiAkd2hpdGU7XG5cbiAgICB9IEBlbHNlIHtcbiAgICAgICAgY29sb3I6ICR3aGl0ZTtcbiAgICAgICAgYmFja2dyb3VuZDogJGNvbG9yO1xuICAgIH1cbn1cblxuQG1peGluIGhvdmVyLWNvbG9yKCRjb2xvcikge1xuICAgICY6aG92ZXJ7XG4gICAgICAgICRjb2xvcjogcmdiYSgkY29sb3IsIC4yNSk7XG4gICAgICAgIC8vc295IHVuIHB1dGlzaW1vIGdlbmlvIF5cbiAgICAgICAgYm94LXNoYWRvdzogMCAycmVtIDEuNXJlbSAkY29sb3I7XG4gICAgfVxufVxuXG5AbWl4aW4gc2l6ZSgkd2lkdGgsICRoZWlnaHQpIHtcbiAgICB3aWR0aDogJHdpZHRoO1xuICAgIGhlaWdodDogJGhlaWdodDtcbn1cblxuQG1peGluIHNjcm9sbCgkeSwgJHgpe1xuICAgIG92ZXJmbG93LXk6ICR5O1xuICAgIG92ZXJmbG93LXg6ICR4O1xufSIsIkB1c2UgXCJzcmMvdmFyaWFibGVzXCIgYXMgKjtcblxubmF2IHtcbiAgLyogcG9zaXRpb24gaW4gcGFyZW50IGdyaWQgKi9cbiAgZ3JpZC1yb3c6IDEgLyAzO1xuICBncmlkLWNvbHVtbjogMSAvIDI7XG5cbiAgQGluY2x1ZGUgc2l6ZSgkbmF2LXdpZHRoLCA5OHZoKTtcbiAgYm9yZGVyLXJhZGl1czogMi41cmVtIDAgMCAyLjVyZW07XG4gIGJhY2tncm91bmQ6ICR3aGl0ZTtcblxuICBhIHtcbiAgICBsaW5lLWhlaWdodDogNC4ycmVtO1xuICAgIG1hcmdpbjogMi41cmVtO1xuICAgIEBpbmNsdWRlIHNpemUoMy45cmVtLCAzLjlyZW0pO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgICYuYWN0aXZlIHtcbiAgICAgIGJveC1zaGFkb3c6ICRib3gtc2hhZG93O1xuICAgICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICAgIH1cbiAgfVxufVxuXG5zZWN0aW9uIHtcbiAgLyogcG9zaXRpb24gaW4gcGFyZW50IGdyaWQgKi9cbiAgZ3JpZC1yb3c6IDEgLyAyO1xuICBncmlkLWNvbHVtbjogMiAvIDQ7ICBcbn1cblxuI3NlYXJjaC1iYXIge1xuICBiYWNrZ3JvdW5kOiAkd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDAuOXJlbTtcbiAgQGluY2x1ZGUgZmxleChyb3csIG5vd3JhcCwgY2VudGVyLCBjZW50ZXIsIGNlbnRlcik7XG4gIHBhZGRpbmc6IDEuNXJlbSAwIDEuNXJlbSAxLjVyZW07XG5cblxuICBpbnB1dCB7XG4gICAgY29sb3I6ICRhY2NlbnQtY29sb3I7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcblxuICAgICY6OnBsYWNlaG9sZGVyIHtcbiAgICAgIGNvbG9yOiAkYmxhY2s7XG4gICAgfVxuICB9XG59XG5cbi5idXR0b24tdG9wIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIHBhZGRpbmc6IDAuNXJlbSAxLjVyZW07XG4gIG1pbi13aWR0aDogY2FsYygxMS42cmVtIC8gMik7XG4gIG1heC13aWR0aDogMTVyZW07XG5cbiAgYm9yZGVyLXJhZGl1czogMS4ycmVtO1xuICBoZWlnaHQ6IDMuNXJlbTtcbn1cblxuI3NvcnRpbmctYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGRhcmstYmx1ZTtcbiAgY29sb3I6ICR3aGl0ZTtcblxuICAvKiBoaWRlIGl0IG9uIG1vYmlsZSEhICovXG4gIGRpc3BsYXk6IG5vbmU7XG5cbiAgYm9yZGVyLXJhZGl1czogMi43cmVtO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBAaW5jbHVkZSBzaXplKDEyLjhyZW0sIDcwcmVtKTtcblxuICBidXR0b24ge1xuICAgIGZvbnQtZmFtaWx5OiAkZm9udDtcbiAgICBjb2xvcjogJHdoaXRlO1xuXG4gICAgcGFkZGluZzogMC41cmVtO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gIH1cblxuICBkaXYge1xuICAgIHN2ZyB7XG4gICAgICBtYXJnaW46IDAgMCAwLjlyZW0gMC41cmVtO1xuICAgICAgcGF0aCB7XG4gICAgICAgIGZpbGw6ICNjMWM3Zjc7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmFscGhhYmV0aWNhbCxcbiAgLmNvcm5lcixcbiAgLmxldHRlcnMge1xuICAgIGJhY2tncm91bmQ6ICRhY2NlbnQtY29sb3I7XG4gIH1cblxuICAuY29ybmVyIHtcbiAgICBncmlkLXJvdzogMiAvIDM7XG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xuICB9XG5cbiAgLmFscGhhYmV0aWNhbCxcbiAgLmRhdGUge1xuICAgIHBhZGRpbmc6IDNyZW0gMS41cmVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gIC5hbHBoYWJldGljYWwge1xuICAgIGdyaWQtcm93OiAxIC8gMjtcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XG4gICAgYm9yZGVyLXJhZGl1czogMi43cmVtIDAgMCAyLjdyZW07XG4gIH1cblxuICAuZGF0ZSB7XG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcbiAgICBib3JkZXItcmFkaXVzOiAwIDIuN3JlbSAwIDA7XG4gICAgYmFja2dyb3VuZDogJGRhcmstYmx1ZTtcbiAgfVxuXG4gIC5sZXR0ZXJzIHtcbiAgICBncmlkLXJvdzogMSAvIDM7XG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xuXG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMCAyLjFyZW07XG4gIH1cblxuICAubGV0dGVyIHtcbiAgICBwYWRkaW5nOiAwLjlyZW07XG4gICAgYm9yZGVyOiAwLjJyZW0gc29saWQgJGFjY2VudC1jb2xvcjtcblxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgIGJvcmRlcjogMC4ycmVtIHNvbGlkICRzaWRlLWNvbG9yO1xuICAgICAgYm9yZGVyLXJhZGl1czogMC45cmVtO1xuICAgIH1cbiAgfVxuXG4gIC52ZXJ0aWNhbCB7XG4gICAgd3JpdGluZy1tb2RlOiB2ZXJ0aWNhbC1ybDtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIH1cbn1cblxuZm9ybSB7XG4gIEBpbmNsdWRlIGZsZXgoY29sdW1uLCBub3dyYXAsIGZsZXgtc3RhcnQsIHNwYWNlLWV2ZW5seSwgZmxleC1zdGFydCk7XG4gIHdpZHRoOiA0MHJlbTtcbiAgYmFja2dyb3VuZDogJHdoaXRlO1xuICBwYWRkaW5nOiAyLjVyZW0gNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcblxuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMTB2aDtcbiAgbGVmdDogY2FsYyg1MCUgLSAyMHJlbSk7IC8qIDUwJSAtIGhhbGYgb2YgdGhlIGZvcm0gc2l6ZSAqL1xuXG4gIGxhYmVsIHtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiAkYWNjZW50LWNvbG9yO1xuICB9XG5cbiAgaW5wdXQgeyB3aWR0aDogMTAwJTsgfVxuXG4gIGJ1dHRvbiB7IFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBtYXJnaW46IDJyZW07XG4gIH1cbn1cblxuLmJ1dHRvbi1jbG9zZSB7XG4gIEBpbmNsdWRlIHNpemUoNXJlbSwgNXJlbSk7XG4gIGZvbnQtc2l6ZTogMi41cmVtO1xuICBib3JkZXItcmFkaXVzOiAyLjVyZW07XG4gIGJhY2tncm91bmQ6ICNkZGQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgb3V0bGluZTogbm9uZTtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcblxuICAmOmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZDogJHNpZGUtY29sb3I7XG4gICAgY29sb3I6ICR3aGl0ZTtcbiAgfVxufVxuXG4jbW9kYWwge1xuICBiYWNrZ3JvdW5kOiByZ2JhKCRibGFjaywgLjUpO1xuICBAaW5jbHVkZSBzaXplKDEwMHZ3LCAxMDB2aCk7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xufVxuXG4uYnV0dG9ucyB7IGRpc3BsYXk6IG5vbmU7IH1cblxuQGluY2x1ZGUgYnJlYWtwb2ludChcInRhYmxldFwiKSB7XG4gIC5idXR0b25zIHsgZGlzcGxheTogYmxvY2s7IH1cbn1cblxuQGluY2x1ZGUgYnJlYWtwb2ludCgnZGVza3RvcCcpIHtcbiAgI3NvcnRpbmctYmFyIHtcbiAgICAvKiBwb3NpdGlvbiBpbiBwYXJlbnQgZ3JpZCAqL1xuICAgIGdyaWQtcm93OiAyIC8gMztcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XG4gIFxuICAgIEBpbmNsdWRlIGdyaWQoMCk7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyMS41cmVtIDQ4LjVyZW07XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1cmVtIDcuNHJlbTtcbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/header/header.component */ "2MiI");
/* harmony import */ var _contact_list_contact_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact-list/contact-list.component */ "h49d");



class AppComponent {
    constructor() {
        this.title = 'Contact List';
        this.alphabetList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-contact-list");
    } }, directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _contact_list_contact_list_component__WEBPACK_IMPORTED_MODULE_2__["ContactListComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "qlzE");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _contact_list_contact_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact-list/contact-list.component */ "h49d");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/header/header.component */ "2MiI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");







class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _angular_http__WEBPACK_IMPORTED_MODULE_2__["HttpModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _contact_list_contact_list_component__WEBPACK_IMPORTED_MODULE_4__["ContactListComponent"],
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _angular_http__WEBPACK_IMPORTED_MODULE_2__["HttpModule"]] }); })();


/***/ }),

/***/ "dkb4":
/*!**********************************************!*\
  !*** ./src/app/services/contacts.service.ts ***!
  \**********************************************/
/*! exports provided: ContactsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsService", function() { return ContactsService; });
/* harmony import */ var _contacts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../contacts */ "t0dK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ContactsService {
    constructor() { }
    //get contact list
    getContacts() {
        this.contactList = _contacts__WEBPACK_IMPORTED_MODULE_0__["default"];
        return this.contactList;
    }
    getFavorites() {
        this.favoriteList = [
            {
                name: 'Yuumi',
                email: 'yuumizilla@gmail.com',
                phoneNumber: '(+34) *** *** 015',
                image: "https://avatars.githubusercontent.com/u/69478059?v=4"
            }
        ];
        return this.favoriteList;
    }
    addContact(contact) {
        // add contact to contacts list
        contact.image == "" ? contact.image = "http://svgur.com/i/7aS.svg" : contact.image = contact.image;
        const newContact = Object.assign({}, contact);
        _contacts__WEBPACK_IMPORTED_MODULE_0__["default"].push(newContact);
    }
}
ContactsService.ɵfac = function ContactsService_Factory(t) { return new (t || ContactsService)(); };
ContactsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ContactsService, factory: ContactsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "h49d":
/*!********************************************************!*\
  !*** ./src/app/contact-list/contact-list.component.ts ***!
  \********************************************************/
/*! exports provided: ContactListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactListComponent", function() { return ContactListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_contacts_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/contacts.service */ "dkb4");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function ContactListComponent_div_0_article_4_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactListComponent_div_0_article_4_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const favorite_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r4.addFavorite(favorite_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const favorite_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", favorite_r3.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](favorite_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](favorite_r3.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](favorite_r3.phoneNumber);
} }
function ContactListComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Favorite");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ContactListComponent_div_0_article_4_Template, 11, 4, "article", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.favorites);
} }
function ContactListComponent_article_16_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Send message");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Call");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactListComponent_article_16_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const contact_r6 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.addFavorite(contact_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactListComponent_article_16_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const contact_r6 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.delete(contact_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " \u2715 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const contact_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", contact_r6.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](contact_r6.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](contact_r6.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](contact_r6.phoneNumber);
} }
class ContactListComponent {
    constructor(contactService) {
        this.contactService = contactService;
    }
    ngOnInit() {
        this.contacts = this.contactService.getContacts();
        this.favorites = this.contactService.getFavorites();
    }
    delete(contact) {
        this.contacts = this.contacts.filter(c => c !== contact);
    }
    addFavorite(contact) {
        const newFavorite = Object.assign({}, contact);
        //if favorite includes the contact we just added:
        this.favorites.includes(contact) ? this.favorites = this.favorites.filter(f => f !== contact) : this.favorites.push(newFavorite);
    }
}
ContactListComponent.ɵfac = function ContactListComponent_Factory(t) { return new (t || ContactListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_contacts_service__WEBPACK_IMPORTED_MODULE_1__["ContactsService"])); };
ContactListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactListComponent, selectors: [["app-contact-list"]], decls: 17, vars: 2, consts: [[4, "ngIf"], [1, "contact", "list"], [1, "light-steel-blue", "uppercase", "bold", "grid"], [1, "name"], [1, "email"], [1, "phone"], [1, "actions"], ["class", "grid contact-item", 4, "ngFor", "ngForOf"], [1, "contact", "faves"], ["class", "favorite-card", 4, "ngFor", "ngForOf"], [1, "favorite-card"], ["alt", "", 1, "round-img", 3, "src"], [1, "fave-button", "side-bg", "button-round", 3, "click"], [1, "fas", "fa-star"], [1, "line-clamp"], [1, "grid", "contact-item"], [1, "phone", "line-clamp"], [1, "action-buttons", "message", "bold"], [1, "action-buttons", "bold", "call"], [1, "buttons"], ["title", "favorite contact", 1, "fave-button", "accent-bg", "button-round", 3, "click"], [1, "far", "fa-star"], ["title", "delete contact", 1, "fave-button", "accent-bg", "button-round", 3, "click"]], template: function ContactListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ContactListComponent_div_0_Template, 5, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Contact List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "others");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ContactListComponent_article_16_Template, 18, 4, "article", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.favorites.length != 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.contacts);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["@import url(\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css\");\n@import url(\"https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;600&display=swap\");\n\n\n\n\n\n.round-img[_ngcontent-%COMP%] {\n  width: 6rem;\n  height: 6rem;\n  object-fit: cover;\n  border-radius: 3rem;\n}\n.favorite-card[_ngcontent-%COMP%] {\n  display: grid;\n  grid-gap: 1rem;\n  align-items: center;\n  justify-items: center;\n  grid-template-columns: 6rem 15rem calc(6rem / 2);\n  grid-template-rows: repeat(2, auto);\n  background: #ffffff;\n  border-radius: 2.8rem;\n  box-shadow: 0 0.5rem 1rem #ddd;\n  padding: 1rem;\n  margin: 0 1rem;\n  height: 14rem;\n  grid-row: 1/2;\n}\n.favorite-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  justify-self: start;\n}\n.favorite-card[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  grid-column: 1/4;\n  grid-row: 2/3;\n  border-top: 0.1rem dashed #AFBED2;\n  width: 100%;\n  padding: 0.5rem 1rem;\n}\n.contact[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  line-height: normal;\n  margin: 0.5rem 0;\n}\n.contact[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  line-height: 1.5;\n  margin: 0;\n}\n.contact[_ngcontent-%COMP%]   section[_ngcontent-%COMP%] {\n  grid-column: 2/3;\n}\n.list[_ngcontent-%COMP%] {\n  overflow-y: scroll;\n  overflow-x: hidden;\n  width: 77vw;\n  height: 43rem;\n}\n.faves[_ngcontent-%COMP%] {\n  display: grid;\n  grid-gap: 0 1.5rem;\n  grid-template-columns: repeat(6, 30rem);\n  grid-template-rows: 16rem;\n  height: 16rem;\n  overflow-y: hidden;\n  overflow-x: scroll;\n}\n.line-clamp[_ngcontent-%COMP%] {\n  line-clamp: 1;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n}\n.grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-gap: 0 2.5rem;\n  grid-template-columns: 6rem minmax(20vw, 38rem) 8rem;\n  grid-template-rows: 6rem;\n  justify-content: start;\n  justify-items: center;\n  align-items: center;\n  margin-bottom: 1rem;\n  padding: 0.8rem;\n}\n.grid[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  justify-self: start;\n}\n.grid[_ngcontent-%COMP%]   .email[_ngcontent-%COMP%], .grid[_ngcontent-%COMP%]   .phone[_ngcontent-%COMP%], .grid[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%] {\n  display: none;\n}\n.grid.contact-item[_ngcontent-%COMP%] {\n  border-radius: 2.8rem;\n  background: none;\n}\n.grid.contact-item[_ngcontent-%COMP%]:hover, .grid.contact-item[_ngcontent-%COMP%]:active {\n  background: rgba(239, 159, 183, 0.25);\n}\n.grid.contact-item[_ngcontent-%COMP%]:hover   .action-buttons[_ngcontent-%COMP%], .grid.contact-item[_ngcontent-%COMP%]:hover   .fave-button[_ngcontent-%COMP%], .grid.contact-item[_ngcontent-%COMP%]:active   .action-buttons[_ngcontent-%COMP%], .grid.contact-item[_ngcontent-%COMP%]:active   .fave-button[_ngcontent-%COMP%] {\n  color: #2531B6;\n  background: #ffffff;\n}\n.action-buttons[_ngcontent-%COMP%] {\n  min-width: 6.3rem;\n  border-radius: 0.4rem;\n  padding: 1.1rem;\n  vertical-align: middle;\n  color: #ddd;\n  background: none;\n}\n.action-buttons.call[_ngcontent-%COMP%]::before {\n  content: url(\"/assets/svg/call_icon.svg\");\n  margin-right: 0.5rem;\n}\n.action-buttons.message[_ngcontent-%COMP%]::before {\n  content: url(\"/assets/svg/message_icon.svg\");\n  margin-right: 0.5rem;\n}\n\n@media (min-width: 768px) {\n  .grid[_ngcontent-%COMP%] {\n    grid-template-columns: 6rem 14rem 20rem 15rem 8rem;\n    justify-content: space-between;\n  }\n  .grid[_ngcontent-%COMP%]   .email[_ngcontent-%COMP%], .grid[_ngcontent-%COMP%]   .phone[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n\n@media (min-width: 1200px) {\n  .list[_ngcontent-%COMP%] {\n    width: 110rem;\n    height: 43rem;\n  }\n\n  .grid[_ngcontent-%COMP%] {\n    grid-template-columns: 6rem 14rem 20rem 15rem 22rem 8rem;\n    justify-content: space-between;\n  }\n  .grid[_ngcontent-%COMP%]   .email[_ngcontent-%COMP%], .grid[_ngcontent-%COMP%]   .phone[_ngcontent-%COMP%], .grid[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL192YXJpYWJsZXMuc2NzcyIsIi4uLy4uLy4uL2NvbnRhY3QtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSx5RkFBQTtBQUNBLCtGQUFBO0FBRVIsc0RBQUE7QUFDQSxXQUFBO0FBV0EsY0FBQTtBQVNBLFVBQUE7QUFJQSxtREFBQTtBQzFCQTtFRG1HSSxXQW5GaUI7RUFvRmpCLFlBcEZpQjtFQ2RqQixpQkFBQTtFQUNBLG1CQUFBO0FBT0o7QUFKQTtFRDRESSxhQUFBO0VBQ0EsY0M1RGM7RUFDZCxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0RBQUE7RUFDQSxtQ0FBQTtFQUVBLG1CRExJO0VDTUoscUJBQUE7RUFDQSw4QkREUztFQ0dULGFBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUVBLGFBQUE7QUFLSjtBQUhJO0VBQUssbUJBQUE7QUFNVDtBQUpJO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUNBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7QUFNUjtBQURJO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBSVI7QUFESTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0FBR1I7QUFBSTtFQUFVLGdCQUFBO0FBR2Q7QUFBQTtFRHNESSxrQkNyRGdCO0VEc0RoQixrQkN0RHdCO0VEZ0R4QixXQy9DYztFRGdEZCxhQ2hEb0I7QUFLeEI7QUFGQTtFRFdJLGFBQUE7RUFDQSxrQkNYYztFQUNkLHVDQUFBO0VBQ0EseUJEdENlO0VDd0NmLGFEeENlO0VBb0ZmLGtCQzNDZ0I7RUQ0Q2hCLGtCQzVDd0I7QUFNNUI7QUFIQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFNSjtBQUhBO0VETEksYUFBQTtFQUNBLGtCQ0tjO0VBQ2Qsb0RBQUE7RUFDQSx3QkQxRGlCO0VDMkRqQixzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFFQSxtQkFBQTtFQUNBLGVBQUE7QUFNSjtBQUpJO0VBQVEsbUJBQUE7QUFPWjtBQU5JO0VBQTJCLGFBQUE7QUFTL0I7QUFQSTtFQUNJLHFCQUFBO0VBQ0EsZ0JBQUE7QUFTUjtBQVBRO0VBQ0kscUNBQUE7QUFTWjtBQVBZO0VBQ0ksY0QxRkQ7RUMyRkMsbUJEdEZSO0FDK0ZSO0FBSEE7RUFDSSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBRUEsV0RqR1M7RUNrR1QsZ0JBQUE7QUFLSjtBQUhJO0VBQ0kseUNBQUE7RUFDQSxvQkFBQTtBQUtSO0FBRkk7RUFDSSw0Q0FBQTtFQUNBLG9CQUFBO0FBSVI7QUQ5RVEsMkNBQUE7QUFDQTtFQytFSjtJQUNJLGtEQUFBO0lBQ0EsOEJBQUE7RUFHTjtFQUZNO0lBQWlCLGNBQUE7RUFLdkI7QUFDRjtBRGpHUSxvREFBQTtBQUNBO0VDK0ZKO0lEL0JBLGFDK0JzQjtJRDlCdEIsYUM4QjhCO0VBT2hDOztFQUpFO0lBQ0ksd0RBQUE7SUFDQSw4QkFBQTtFQU9OO0VBTE07SUFBMkIsY0FBQTtFQVFqQztBQUNGIiwiZmlsZSI6ImNvbnRhY3QtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvZm9udC1hd2Vzb21lLzUuMTUuMy9jc3MvYWxsLm1pbi5jc3NcIik7XG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1RdWlja3NhbmQ6d2dodEAzMDA7NDAwOzYwMCZkaXNwbGF5PXN3YXAnKTtcblxuLyoqKioqKioqKioqKioqKioqKioqKiB2YXJpYWJsZXMgKioqKioqKioqKioqKioqKioqKioqL1xuLyogY29sb3JzICovXG4kYWNjZW50LWNvbG9yOiAjMjUzMUI2O1xuJGRhcmstYmx1ZTogIzFFMkJBMTtcbiRzaWRlLWNvbG9yOiAgI2VmOWZiNztcbiRsaWdodC1zdGVlbC1ibHVlOiAjQUZCRUQyO1xuJGJsYWNrOiAjMjAyMDIwO1xuJHdoaXRlOiAjZmZmZmZmO1xuJGxpZ2h0LWdyYXk6ICNkZGQ7XG4kYmctY29sb3I6ICNmM2Y0ZmI7XG4kYmctbWFpbjogI2Y4ZmFmYjtcblxuLyogdXRpbGl0aWVzICovXG4kYm94LXNoYWRvdzogMCAuNXJlbSAxcmVtICRsaWdodC1ncmF5O1xuJGJvcmRlcjogMXB4IHNvbGlkICRhY2NlbnQtY29sb3I7XG4kY29udGFjdC1pbWFnZS1zaXplOiA2cmVtO1xuJGJ1dHRvbi1zaXplOiBjYWxjKDZyZW0gLyAyKTtcbiRidXR0b24tc2l6ZS1sOiA2cmVtO1xuJG5hdi13aWR0aDogN3JlbTtcbiRmYXZlLWNhcmQtaGVpZ2h0OiAxNnJlbTtcblxuLyogZm9udHMgKi9cbiRoZWx2ZXRpY2E6IEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiRmb250OiAnUXVpY2tzYW5kJywgc2Fucy1zZXJpZjtcblxuLyoqKioqKioqKioqKioqKioqKioqKiBtaXhpbnMgKioqKioqKioqKioqKioqKioqKioqL1xuLy8gYnJlYWtwb2ludHMgKG1vYmlsZS1maXJzdClcbkBtaXhpbiBicmVha3BvaW50KCRwb2ludCkge1xuICAgIEBpZiAkcG9pbnQgPT0gJ2Rlc2t0b3AteHhsJyB7XG4gICAgICAgLyogWFgtTGFyZ2UgZGV2aWNlcyAobGFyZ2VyIGRlc2t0b3BzLCAxNDAwcHggYW5kIHVwKSAqL1xuICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxNDAwcHgpIHsgQGNvbnRlbnQgOyB9XG4gICB9XG4gICBAZWxzZSBpZiAkcG9pbnQgPT0gJ2Rlc2t0b3AteGwnIHtcbiAgICAgICAgLyogWC1MYXJnZSBkZXZpY2VzIChsYXJnZSBkZXNrdG9wcywgMTIwMHB4IGFuZCB1cCkgKi9cbiAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkgeyBAY29udGVudCA7IH1cbiAgICB9XG4gICAgQGVsc2UgaWYgJHBvaW50ID09ICdkZXNrdG9wJyB7XG4gICAgICAgIC8qIExhcmdlIGRldmljZXMgKGRlc2t0b3BzLCA5OTBweCBhbmQgdXApICovXG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTBweCkgeyBAY29udGVudCA7IH1cbiAgIH1cbiAgICAgQGVsc2UgaWYgJHBvaW50ID09ICd0YWJsZXQnIHtcbiAgICAgICAgLyogTWVkaXVtIGRldmljZXMgKHRhYmxldHMsIDc2OHB4IGFuZCB1cCkgKi9cbiAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7IEBjb250ZW50IDsgfVxuICAgfVxuICAgIEBlbHNlIGlmICRwb2ludCA9PSAnbW9iaWxlJyB7XG4gICAgICAgIC8qIFNtYWxsIGRldmljZXMgKGxhbmRzY2FwZSBwaG9uZXMsIDU3NnB4IGFuZCB1cCkgKi9cbiAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7IEBjb250ZW50IDsgfVxuICAgfVxuICAgQGVsc2UgaWYgJHBvaW50ID09ICdtb2JpbGVvbmx5JyB7XG4gICAgICAgIC8qIFNtYWxsIGRldmljZXMgKHNtYWxsIHBob25lcywgMzIwcHggYW5kIHVwKSAqL1xuICAgICAgICAvL3NlcmlvdXNseSB3aG8gdXNlcyBhIHBob25lIHNtYWxsZXIgdGhhbiB0aGlzIGluIDIwMjFcbiAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSB7IEBjb250ZW50IDsgfVxuICAgfVxufVxuXG4vL2dyaWQgd2l0aCBzYW1lIGNvbHVtbi9yb3cgc2l6ZVxuQG1peGluIGdyaWQtc2l6ZSAoJGNvbHVtbk51bWJlciwgJGNvbHVtblNpemUsICRyb3dOdW1iZXIsICRyb3dTaXplLCAgJGdyaWRHYXApIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KCRjb2x1bW5OdW1iZXIsICRjb2x1bW5TaXplKTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgkcm93TnVtYmVyLCAkcm93U2l6ZSk7XG4gICAgZ3JpZC1nYXA6ICRncmlkR2FwO1xufVxuXG4vL2dyaWQgd2l0aCBkaWZmZXJlbnQgdmFsdWVzXG5AbWl4aW4gZ3JpZCAoJGdyaWRHYXApIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtZ2FwOiAkZ3JpZEdhcDtcbn1cblxuLy9mbGV4IGNlbnRlcmVkXG5AbWl4aW4gZmxleCgkZGlyZWN0aW9uLCAkd3JhcCwgJGp1c3RpZnlJdGVtcywgJGp1c3RpZnlDb250ZW50LCAkYWxpZ25JdGVtcykge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiAkZGlyZWN0aW9uICR3cmFwO1xuICAgIGp1c3RpZnktaXRlbXM6ICRqdXN0aWZ5SXRlbXM7XG4gICAganVzdGlmeS1jb250ZW50OiAkanVzdGlmeUNvbnRlbnQ7XG4gICAgYWxpZ24taXRlbXM6ICRhbGlnbkl0ZW1zO1xufVxuXG5AbWl4aW4gYWNjZW50LWNvbG9yKCRjb2xvciwgJG5lZ2F0aXZlOmZhbHNlKSB7XG4gICAgQGlmICRuZWdhdGl2ZSB7XG4gICAgICAgIGNvbG9yOiAkY29sb3I7XG4gICAgICAgIGJhY2tncm91bmQ6ICR3aGl0ZTtcblxuICAgIH0gQGVsc2Uge1xuICAgICAgICBjb2xvcjogJHdoaXRlO1xuICAgICAgICBiYWNrZ3JvdW5kOiAkY29sb3I7XG4gICAgfVxufVxuXG5AbWl4aW4gaG92ZXItY29sb3IoJGNvbG9yKSB7XG4gICAgJjpob3ZlcntcbiAgICAgICAgJGNvbG9yOiByZ2JhKCRjb2xvciwgLjI1KTtcbiAgICAgICAgLy9zb3kgdW4gcHV0aXNpbW8gZ2VuaW8gXlxuICAgICAgICBib3gtc2hhZG93OiAwIDJyZW0gMS41cmVtICRjb2xvcjtcbiAgICB9XG59XG5cbkBtaXhpbiBzaXplKCR3aWR0aCwgJGhlaWdodCkge1xuICAgIHdpZHRoOiAkd2lkdGg7XG4gICAgaGVpZ2h0OiAkaGVpZ2h0O1xufVxuXG5AbWl4aW4gc2Nyb2xsKCR5LCAkeCl7XG4gICAgb3ZlcmZsb3cteTogJHk7XG4gICAgb3ZlcmZsb3cteDogJHg7XG59IiwiQHVzZSBcInNyYy92YXJpYWJsZXNcIiBhcyAqO1xuXG4ucm91bmQtaW1nIHtcbiAgICBAaW5jbHVkZSBzaXplKCRjb250YWN0LWltYWdlLXNpemUsICRjb250YWN0LWltYWdlLXNpemUpO1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDNyZW07XG59XG5cbi5mYXZvcml0ZS1jYXJkIHtcbiAgICBAaW5jbHVkZSBncmlkKDFyZW0pO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogJGNvbnRhY3QtaW1hZ2Utc2l6ZSAxNXJlbSAkYnV0dG9uLXNpemU7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgYXV0byk7XG5cbiAgICBiYWNrZ3JvdW5kOiAkd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogMi44cmVtO1xuICAgIGJveC1zaGFkb3c6ICRib3gtc2hhZG93O1xuXG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBtYXJnaW46IDAgMXJlbTtcbiAgICBoZWlnaHQ6IDE0cmVtO1xuXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xuXG4gICAgaDMgeyBqdXN0aWZ5LXNlbGY6IHN0YXJ0OyB9XG5cbiAgICBkaXYgeyBcbiAgICAgICAgZ3JpZC1jb2x1bW46IDEgLyA0OyBcbiAgICAgICAgZ3JpZC1yb3c6IDIgLyAzOyBcbiAgICAgICAgYm9yZGVyLXRvcDogLjFyZW0gZGFzaGVkICRsaWdodC1zdGVlbC1ibHVlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcGFkZGluZzogLjVyZW0gMXJlbTtcbiAgICB9XG59XG5cbi5jb250YWN0IHtcbiAgICBoMyB7IFxuICAgICAgICBmb250LXNpemU6IDEuNnJlbTsgXG4gICAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gICAgICAgIG1hcmdpbjogLjVyZW0gMDsgXG4gICAgfVxuXG4gICAgcCB7IFxuICAgICAgICBmb250LXNpemU6IDEuMnJlbTsgXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICB9XG5cbiAgICBzZWN0aW9uIHsgZ3JpZC1jb2x1bW46IDIgLyAzOyB9XG59XG5cbi5saXN0IHsgXG4gICAgQGluY2x1ZGUgc2Nyb2xsKHNjcm9sbCwgaGlkZGVuKTtcbiAgICBAaW5jbHVkZSBzaXplKDc3dncsIDQzcmVtKTtcbn1cblxuLmZhdmVzIHtcbiAgICBAaW5jbHVkZSBncmlkKDAgMS41cmVtKTtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg2LCAzMHJlbSk7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAkZmF2ZS1jYXJkLWhlaWdodDtcblxuICAgIGhlaWdodDogJGZhdmUtY2FyZC1oZWlnaHQ7XG4gICAgQGluY2x1ZGUgc2Nyb2xsKGhpZGRlbiwgc2Nyb2xsKTtcbn1cblxuLmxpbmUtY2xhbXAge1xuICAgIGxpbmUtY2xhbXA6IDE7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uZ3JpZCB7XG4gICAgQGluY2x1ZGUgZ3JpZCgwIDIuNXJlbSk7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAkY29udGFjdC1pbWFnZS1zaXplIG1pbm1heCgyMHZ3LCAzOHJlbSkgOHJlbTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6ICRjb250YWN0LWltYWdlLXNpemU7XG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgcGFkZGluZzogLjhyZW07XG5cbiAgICAubmFtZSB7IGp1c3RpZnktc2VsZjogc3RhcnQ7IH0gXG4gICAgLmVtYWlsLCAucGhvbmUsIC5hY3Rpb25zIHsgZGlzcGxheTogbm9uZTsgfVxuXG4gICAgJi5jb250YWN0LWl0ZW0ge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAyLjhyZW07XG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG5cbiAgICAgICAgJjpob3ZlciwgJjphY3RpdmUge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgkc2lkZS1jb2xvciwgMjUlKTtcblxuICAgICAgICAgICAgLmFjdGlvbi1idXR0b25zLCAuZmF2ZS1idXR0b24ge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAkYWNjZW50LWNvbG9yO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICR3aGl0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmFjdGlvbi1idXR0b25zIHtcbiAgICBtaW4td2lkdGg6IDYuM3JlbTtcbiAgICBib3JkZXItcmFkaXVzOiAuNHJlbTtcbiAgICBwYWRkaW5nOiAxLjFyZW07XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcblxuICAgIGNvbG9yOiAkbGlnaHQtZ3JheTtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuXG4gICAgJi5jYWxsOjpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiB1cmwoXCIvYXNzZXRzL3N2Zy9jYWxsX2ljb24uc3ZnXCIpO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IC41cmVtO1xuICAgIH1cbiAgICBcbiAgICAmLm1lc3NhZ2U6OmJlZm9yZSB7XG4gICAgICAgIGNvbnRlbnQ6IHVybChcIi9hc3NldHMvc3ZnL21lc3NhZ2VfaWNvbi5zdmdcIik7XG4gICAgICAgIG1hcmdpbi1yaWdodDogLjVyZW07XG4gICAgfSAgXG59XG5cbkBpbmNsdWRlIGJyZWFrcG9pbnQoJ3RhYmxldCcpIHtcbiAgICAvL2NvbnRhY3QtbGlzdCBnb3R0YSBzaG93IGVtYWlsLCBwaG9uZSBhbmQgYWN0aW9ucyBoZXJlXG4gICAgLmdyaWQge1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6ICRjb250YWN0LWltYWdlLXNpemUgMTRyZW0gMjByZW0gMTVyZW0gOHJlbTtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyBcbiAgICAgICAgLmVtYWlsLCAucGhvbmUgeyBkaXNwbGF5OiBibG9jazsgfVxuICAgIH1cbn1cblxuQGluY2x1ZGUgYnJlYWtwb2ludCgnZGVza3RvcC14bCcpIHtcbiAgICAubGlzdCB7IEBpbmNsdWRlIHNpemUoMTEwcmVtLCA0M3JlbSk7IH1cblxuICAgIC8vY29udGFjdC1saXN0IGdvdHRhIHNob3cgZW1haWwsIHBob25lIGFuZCBhY3Rpb25zIGhlcmVcbiAgICAuZ3JpZCB7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogJGNvbnRhY3QtaW1hZ2Utc2l6ZSAxNHJlbSAyMHJlbSAxNXJlbSAyMnJlbSA4cmVtO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IFxuXG4gICAgICAgIC5lbWFpbCwgLnBob25lLCAuYWN0aW9ucyB7IGRpc3BsYXk6IGJsb2NrOyB9XG4gICAgfVxufSJdfQ== */"] });


/***/ }),

/***/ "t0dK":
/*!*****************************!*\
  !*** ./src/app/contacts.ts ***!
  \*****************************/
/*! exports provided: contacts, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contacts", function() { return contacts; });
const contacts = [
    {
        name: "Shakira Robel",
        email: "Ashley_Ritchie@hotmail.com",
        phoneNumber: "965-144-6018",
        image: "https://images.unsplash.com/photo-1579503841516-e0bd7fca5faa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        name: "Green Crist",
        email: "Rosendo53@hotmail.com",
        phoneNumber: "1-522-714-2638 x44811",
        image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        name: "Yvette Dickinson",
        email: "Yolanda.Abernathy@hotmail.com",
        phoneNumber: "(038) 030-9641 x7086",
        image: "https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        name: "Karley Hackett",
        email: "Icie_Gutmann69@yahoo.com",
        phoneNumber: "(251) 436-6001",
        image: "https://images.unsplash.com/photo-1592158169526-9deda479afce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=483&q=80"
    },
    {
        name: "Mrs. Otha Beahan",
        email: "Brice46@yahoo.com",
        phoneNumber: "005-851-7095 x72027",
        image: "https://images.unsplash.com/photo-1605087880595-8cc6db61f3c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
    },
    {
        name: "Ignacio Larson",
        email: "Remington.Boyer63@yahoo.com",
        phoneNumber: "1-471-836-5871 x5841",
        image: "https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
    },
    {
        name: "Estel Armstrong",
        email: "Chasity.Metz83@gmail.com",
        phoneNumber: "(247) 305-7427",
        image: "https://images.unsplash.com/photo-1584308972272-9e4e7685e80f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
    },
    {
        name: "Citlalli Brown",
        email: "Izabella.Hand21@gmail.com",
        phoneNumber: "475.071.4608 x101",
        image: "https://images.unsplash.com/photo-1616578853146-cb0b5e732b83?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=498&q=80"
    },
    {
        name: "Reginald Kessler",
        email: "Retta.Wolf@gmail.com",
        phoneNumber: "070-610-2661",
        image: "https://images.unsplash.com/photo-1611433216945-3e59dc2de4e0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        name: "Rosina Schiller",
        email: "Rachelle13@hotmail.com",
        phoneNumber: "869.014.6216 x103",
        image: "https://images.unsplash.com/photo-1590616023780-dfff93062e98?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        name: "Annabell Kreiger DVM",
        email: "Kamron_Kilback24@gmail.com",
        phoneNumber: "537.485.6536",
        image: "https://images.unsplash.com/photo-1559563526-cff7656d1ae6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=449&q=80"
    }
];
/* harmony default export */ __webpack_exports__["default"] = (contacts);


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map