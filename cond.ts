export type ReactNode = {
  foo: string
}

export enum ButtonType {
  NoButton,
  BottomButton,
  CenterButton,
}
export interface PopupButton {
  label: ReactNode
  onClick: (e?: any) => any
}

export interface PopupContext<T extends ButtonType> {
  contents?: ReactNode
  buttons: T extends ButtonType.NoButton ? [] : PopupButton[]
  buttonType?: T
}

const popUp: PopupContext<ButtonType.NoButton> = {
  contents: { foo: 'str' },
  buttons: [],
  buttonType: ButtonType.NoButton,
}

const popupButton: PopupButton = {
  label: { foo: 'str' },
  onClick: (e) => {
    console.log(e)
  },
}

// const popUp2: PopupContext<ButtonType.NoButton> = {
//   contents: { foo: 'str' },
//   buttons: [popupButton, popupButton], // type error
//   buttonType: ButtonType.NoButton,
// }

const popUp3: PopupContext<ButtonType.CenterButton> = {
  contents: { foo: 'str' },
  buttons: [popupButton, popupButton, popupButton],
  buttonType: ButtonType.CenterButton,
}

console.log(popUp)
