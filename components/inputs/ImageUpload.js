import Image from 'next/image'
import FormField from './FormField'
import FormFieldDescription from './FormFieldDescription'
import FormFieldLabel from './FormFieldLabel'

const ImageUpload = ({
  label,
  description,
  inputProps,
  readonly,
  value,
  onChange,
}) => {
  return (
    <FormField>
      <FormFieldLabel>{label}</FormFieldLabel>
      <FormFieldDescription>{description}</FormFieldDescription>
      <div className="flex items-center w-full mt-1 gap-2">
        {value && (
          <Image
            fill="responsive"
            width="300px"
            height="300px"
            accept="image/*"
            src={URL.createObjectURL(value)}
          />
        )}
        {!readonly && (
          <label className="flex flex-col w-[300px] h-[300px] border-[3px] border-dashed border-neutral-300 hover:bg-base-200 hover:border-neutral-200 relative">
            <div className="flex flex-col items-center h-full justify-center">
              <p className="text-sm tracking-wider text-neutral-300 ">
                Upload an {value && 'new'} image
              </p>
            </div>
            <input
              type="file"
              className="absolute opacity-0"
              inputProps={inputProps}
              accept=".jpg, .jpeg, .png, .svg"
              onChange={(e) => onChange(e.target.files[0])}
            />
          </label>
        )}
      </div>
    </FormField>
  )
}

export default ImageUpload
