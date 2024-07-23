interface ValidationError {
    field: string;
    message: string;
}

interface ValidationErrorsProps {
    errors: ValidationError[];
    field: string;
}

export default function ValidationErrors({ errors, field }: ValidationErrorsProps) {  
    return (
        <div>
            {errors.filter((error) => error.field === field).map((error, index) => (
                <p key={index} className="text-red-500 text-xs pt-2">{error.message}</p>
            ))}
        </div>
    );
}