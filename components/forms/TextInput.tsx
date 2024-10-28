import { TextInput as TextInputRN, TextInputProps } from 'react-native'
import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form'

interface Props extends TextInputProps {
    error: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined
}

const errorStyles = (error: any) => error ? "border-red-400" : "border-neutral-300"

export default function TextInput(props: Props) {
    return (
        <TextInputRN
            className={`border border-neutral-300 ${errorStyles(props.error)} px-1 h-12 rounded-lg mb-2`}
            {...props}
        />
    )
}
