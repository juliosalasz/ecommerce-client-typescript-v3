import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./FormInputStyles.css";

type FormInputProps = {
  onIcon: IconDefinition;
  placeholder: string;
  label: string;
  type: string;
  required: boolean;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
};

const FormInput = (props: FormInputProps) => {
  const { onIcon, ...otherProps } = props;
  return (
    <div>
      <div className="inputField">
        <div className="inputFieldI">
          <FontAwesomeIcon icon={onIcon} className="" />
        </div>
        <input {...otherProps} />
      </div>
    </div>
  );
};

export default FormInput;
