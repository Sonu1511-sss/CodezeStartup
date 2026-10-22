import React, { forwardRef, createContext, useContext } from 'react'
import { Loader2 } from 'lucide-react'

interface FormControlContextValue {
  id?: string
  isInvalid?: boolean
  isRequired?: boolean
  isDisabled?: boolean
}

const FormControlContext = createContext<FormControlContextValue>({})

export interface FormControlProps
  extends React.HTMLAttributes<HTMLDivElement> {
  id?: string
  isInvalid?: boolean
  isRequired?: boolean
  isDisabled?: boolean
  children: React.ReactNode
}

export const FormControl = forwardRef<HTMLDivElement, FormControlProps>(
  (
    {
      id,
      isInvalid = false,
      isRequired = false,
      isDisabled = false,
      children,
      className = '',
      ...props
    },
    ref
  ) => {
    return (
      <FormControlContext.Provider
        value={{ id, isInvalid, isRequired, isDisabled }}
      >
        <div
          ref={ref}
          className={`f ${className}`.trim()}
          data-invalid={isInvalid ? 'true' : undefined}
          {...props}
        >
          {children}
        </div>
      </FormControlContext.Provider>
    )
  }
)
FormControl.displayName = 'FormControl'

export interface FormLabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode
  isRequired?: boolean
}

export const FormLabel = forwardRef<HTMLLabelElement, FormLabelProps>(
  (
    {
      children,
      isRequired: propIsRequired,
      htmlFor: propHtmlFor,
      className = '',
      ...props
    },
    ref
  ) => {
    const ctx = useContext(FormControlContext)
    const isRequired = propIsRequired ?? ctx.isRequired
    const htmlFor = propHtmlFor ?? ctx.id

    return (
      <label ref={ref} htmlFor={htmlFor} className={className} {...props}>
        {children}
        {isRequired && (
          <span className="req" aria-hidden="true">
            *
          </span>
        )}
      </label>
    )
  }
)
FormLabel.displayName = 'FormLabel'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  isInvalid?: boolean
  isRequired?: boolean
  isDisabled?: boolean
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      isInvalid: propIsInvalid,
      isRequired: propIsRequired,
      disabled: propDisabled,
      id: propId,
      className = '',
      ...props
    },
    ref
  ) => {
    const ctx = useContext(FormControlContext)
    const isInvalid = propIsInvalid ?? ctx.isInvalid
    const isRequired = propIsRequired ?? ctx.isRequired
    const isDisabled = propDisabled ?? ctx.isDisabled
    const id = propId ?? ctx.id

    return (
      <input
        ref={ref}
        id={id}
        required={isRequired}
        disabled={isDisabled}
        aria-invalid={isInvalid ? 'true' : undefined}
        aria-describedby={isInvalid && id ? `${id}-error` : undefined}
        className={className}
        {...props}
      />
    )
  }
)
Input.displayName = 'Input'

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  isInvalid?: boolean
  isRequired?: boolean
  isDisabled?: boolean
  placeholder?: string
  children: React.ReactNode
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      isInvalid: propIsInvalid,
      isRequired: propIsRequired,
      disabled: propDisabled,
      id: propId,
      placeholder,
      children,
      className = '',
      value,
      ...props
    },
    ref
  ) => {
    const ctx = useContext(FormControlContext)
    const isInvalid = propIsInvalid ?? ctx.isInvalid
    const isRequired = propIsRequired ?? ctx.isRequired
    const isDisabled = propDisabled ?? ctx.isDisabled
    const id = propId ?? ctx.id

    return (
      <select
        ref={ref}
        id={id}
        value={value}
        required={isRequired}
        disabled={isDisabled}
        aria-invalid={isInvalid ? 'true' : undefined}
        aria-describedby={isInvalid && id ? `${id}-error` : undefined}
        className={className}
        style={!value ? { color: '#9ca3af' } : undefined}
        {...props}
      >
        {placeholder && (
          <option value="" style={{ color: '#9ca3af' }}>
            {placeholder}
          </option>
        )}
        {children}
      </select>
    )
  }
)
Select.displayName = 'Select'

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  isInvalid?: boolean
  isRequired?: boolean
  isDisabled?: boolean
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      isInvalid: propIsInvalid,
      isRequired: propIsRequired,
      disabled: propDisabled,
      id: propId,
      className = '',
      ...props
    },
    ref
  ) => {
    const ctx = useContext(FormControlContext)
    const isInvalid = propIsInvalid ?? ctx.isInvalid
    const isRequired = propIsRequired ?? ctx.isRequired
    const isDisabled = propDisabled ?? ctx.isDisabled
    const id = propId ?? ctx.id

    return (
      <textarea
        ref={ref}
        id={id}
        required={isRequired}
        disabled={isDisabled}
        aria-invalid={isInvalid ? 'true' : undefined}
        aria-describedby={isInvalid && id ? `${id}-error` : undefined}
        className={className}
        {...props}
      />
    )
  }
)
Textarea.displayName = 'Textarea'

export interface FormErrorMessageProps
  extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode
  id?: string
}

export const FormErrorMessage = forwardRef<
  HTMLSpanElement,
  FormErrorMessageProps
>(({ children, id: propId, className = '', ...props }, ref) => {
  const ctx = useContext(FormControlContext)
  const id = propId ?? (ctx.id ? `${ctx.id}-error` : undefined)

  if (!children) return null

  return (
    <span
      ref={ref}
      id={id}
      role="alert"
      aria-live="polite"
      className={`er ${className}`.trim()}
      {...props}
    >
      {children}
    </span>
  )
})
FormErrorMessage.displayName = 'FormErrorMessage'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean
  loadingText?: string
  children: React.ReactNode
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      isLoading = false,
      loadingText,
      children,
      disabled = false,
      className = '',
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        aria-busy={isLoading ? 'true' : undefined}
        className={className}
        {...props}
      >
        {isLoading ? (
          <>
            <Loader2 size={16} className="btn-spinner" aria-hidden="true" />
            <span>{loadingText || 'Loading...'}</span>
          </>
        ) : (
          children
        )}
      </button>
    )
  }
)
Button.displayName = 'Button'
