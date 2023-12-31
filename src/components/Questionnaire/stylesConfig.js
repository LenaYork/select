export const stylesConfig = {
  control: (baseStyles, state) => ({
    ...baseStyles,
    width: '343px',
    minHeight: '52px',
    maxHeight: '94px',  // Устанавливаем максимальную высоту в 3 строчки
    overflow: "auto",  // Добавляем прокрутку
    borderRadius: '12px',
    border: '1px solid grey',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: '300',
    lineHeight: '20px',
    margin: '0',
    fontSize: '15px',
    borderColor: state.isFocused ? 'grey' : 'red',
  }),
  menu: (base) => ({
    ...base,
    width: '343px',
    fontSize: '15px',
    paddingLeft: '62px',
    fontFamily: 'Montserrat',
    color: '#A0A0A0',
    // background: '#FFCB14',
    borderRadius: '12px',
    '&::-webkit-scrollbar': {
      width: '8px',
      backgroundColor: 'orange',
    },
  }),
  valueContainer: base => ({
    ...base,
    overflowY: 'auto',
    maxHeight: '200px',
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused ? 'null' : null,
    color: state.isFocused ? '#565656' : null,
    fontWeight: state.isFocused ? '500' : null,
  }),
}
