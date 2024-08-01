import { Square } from 'lucide-react';
import { TStyle } from '../../../../../documents/blocks/helpers/t-style';
import { NullableColorInput } from '../inputs/color-input';
import { NullableFontFamily } from '../inputs/font-family';
import FontSizeInput from '../inputs/font-size-input';
import FontWeightInput from '../inputs/font-weight-input';
import PaddingInput from '../inputs/padding-input';
import SliderInput from '../inputs/slider-input';
import TextAlignInput from '../inputs/text-align-input';

type StylePropertyPanelProps = {
  name: keyof TStyle,
  value: TStyle,
  onChange: (style: TStyle) => void,
};
export default function SingleStylePropertyPanel({ name, value, onChange }: StylePropertyPanelProps) {
  const defaultValue = value[name] ?? null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (v: any) => {
    onChange({ ...value, [name]: v });
  };

  switch (name) {
    case 'backgroundColor': {
      return <NullableColorInput label="Background color" defaultValue={defaultValue} onChange={handleChange} />;
    }
    case 'borderColor': {
      return <NullableColorInput label="Border color" defaultValue={defaultValue} onChange={handleChange} />;
    }
    case 'borderRadius': {
      return (
        <SliderInput
          iconLabel={<Square className='h-4 w-4'/>}
          units="px"
          step={4}
          min={0}
          max={48}
          label="Border radius"
          defaultValue={defaultValue}
          onChange={handleChange}
        />
      );
    }
    case 'color': {
      return <NullableColorInput label="Text color" defaultValue={defaultValue} onChange={handleChange} />;
    }
    case 'fontFamily': {
      return <NullableFontFamily label="Font family" defaultValue={defaultValue} onChange={handleChange} />;
    }
    case 'fontSize': {
      return <FontSizeInput label="Font size" defaultValue={defaultValue} onChange={handleChange} />;
    }
    case 'fontWeight': {
      return <FontWeightInput label="Font weight" defaultValue={defaultValue} onChange={handleChange} />;
    }
    case 'textAlign': {
      return <TextAlignInput label="Alignment" defaultValue={defaultValue} onChange={handleChange} />;
    }
    case 'padding': {
      return <PaddingInput label="Padding" defaultValue={defaultValue} onChange={handleChange} />;
    }
  }
}
