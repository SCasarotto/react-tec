interface ButtonData {
  label: string;
  value?: string;
  key?: string;
}
interface ManipulateRowData {
  rowData: string | ButtonData;
  labelForKey: string;
}
export const manipulateRowData = ({
  rowData,
  labelForKey = '',
}: ManipulateRowData) => {
  //Allowing For Greater Shorthand
  if (typeof rowData === 'string') {
    const label = rowData;
    const value = rowData;
    const key = labelForKey + rowData;
    return { label, value, key };
  } else if (typeof rowData === 'object') {
    const { label } = rowData;
    let { value, key } = rowData;

    if (!value) {
      value = label;
    }
    if (!key) {
      key = labelForKey + label;
    }

    return { label, value, key };
  }
  return rowData;
};
