import * as React from 'react';
import { Checkbox } from 'react-native-paper';

const PaperChckbox = () => {
  const [checked, setChecked] = React.useState(false);

  return (
    <Checkbox
      status={checked ? 'checked' : 'unchecked'}
      color="blue"
      onPress={() => {
        setChecked(!checked);
      }}
    />
  );
};

export default PaperChckbox;