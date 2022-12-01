import { BacktopProps } from "element-plus"

export enum InputType {
  input,
  password,
  select,
  datePicker
}

export interface IFormItem
{
  type: InputType,
  field: string,
  label: string,
  rules: any[],
  hidden?: boolean,

  placeHolder?: any,

  options?: Array<IFormSelectOption>,

  otherOptions?: any

}

export interface IFormSelectOption
{
  label: string,
  value: string
}

//breadcrumb
export interface IBreadcrumb
{
  text: string,
  to?: string
}

//table
export interface ITableColumn
{
  prop: string,
  label: string,
  width?: string,
  minWidth?: string,
  slotName?: string
}

//hytable
export interface ITableContent
{
  title: string,
  propList: Array<ITableColumn>,
  showSelection?: boolean
}
