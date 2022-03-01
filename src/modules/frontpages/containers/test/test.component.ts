import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
const VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TestComponent),
    multi: true,
};
@Component({
    selector: 'sb-test',
    templateUrl: './test.component.html',
    providers: [VALUE_ACCESSOR],
    styleUrls: ['./test.component.scss'],
})
export class TestComponent implements ControlValueAccessor {
    @Input() label = 'Enter value here';
    @Input() required = true;
    private _value = '';
    private preValue = '';
    private editing = false;
    public onChange: any = Function.prototype;
    public onTouched: any = Function.prototype;

    get value(): any {
        console.log(this._value);
        return this._value;
    }

    set value(v: any) {
        if (v !== this._value) {
            this._value = v;
            this.onChange(v);
            console.log(this._value);
        }
    }

    writeValue(value: any) {
        this._value = value;
    }

    public registerOnChange(fn: (_: any) => {}): void {
        this.onChange = fn;
        console.log(this._value);
    }

    public registerOnTouched(fn: () => {}): void {
        this.onTouched = fn;
        console.log(this._value);
    }

    onBlur($event: Event) {
        this.editing = false;
        // tslint:disable-next-line:triple-equals
        if (this._value == '') {
            this._value = 'No value available';
        }
    }

    // @ts-ignore
    beginEdit(value) {
        this.preValue = value;
        this.editing = true;
    }
}
