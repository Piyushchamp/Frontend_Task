import type { Meta, StoryObj } from "@storybook/react";
import { InputField } from "./InputField";

const meta: Meta<typeof InputField> = {
  title: "Components/InputField",
  component: InputField,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
### 📝 InputField Component

A versatile and accessible input component with support for:
- Variants (outlined, filled, ghost)
- Sizes (sm, md, lg)
- Password visibility toggle
- Clear button
- Loading state with spinner
- Error/validation messages
- Light/Dark theme support
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["outlined", "filled", "ghost"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    passwordToggle: { control: "boolean" },
    clearable: { control: "boolean" },
    loading: { control: "boolean" },
    invalid: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof InputField>;

/** ✅ Default Input */
export const Default: Story = {
  args: {
    label: "Username",
    placeholder: "Enter your username",
    helperText: "At least 6 characters",
    variant: "outlined",
    size: "md",
  },
};

/** ✅ Password Field with Toggle + Error */
export const Password: Story = {
  args: {
    label: "Password",
    placeholder: "Enter password",
    type: "password",
    passwordToggle: true,
    invalid: true,
    errorMessage: "Password is required",
  },
};

/** ✅ Loading State */
export const Loading: Story = {
  args: {
    label: "Email",
    placeholder: "Checking availability...",
    loading: true,
  },
};

/** ✅ Disabled State */
export const Disabled: Story = {
  args: {
    label: "Disabled Field",
    value: "Not editable",
    disabled: true,
  },
};

/** ✅ Props & API Reference */
export const API: Story = {
  render: () => (
    <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-lg space-y-4">
      <h2 className="text-xl font-semibold">Props</h2>
      <pre className="bg-gray-800 text-gray-100 text-sm p-4 rounded-lg overflow-x-auto">
{`interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  errorMessage?: string;
  invalid?: boolean;
  loading?: boolean;
  variant?: "filled" | "outlined" | "ghost";
  size?: "sm" | "md" | "lg";
  clearable?: boolean;
  passwordToggle?: boolean;
}`}
      </pre>
    </div>
  ),
};

/** ✅ Accessibility Notes */
export const Accessibility: Story = {
  render: () => (
    <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-lg space-y-4">
      <h2 className="text-xl font-semibold">Accessibility Notes</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-200">
        <li>Label is linked to input via <code>&lt;label&gt;</code>.</li>
        <li>Error/Helper text uses <code>aria-describedby</code>.</li>
        <li>Invalid state sets <code>aria-invalid="true"</code>.</li>
        <li>Password toggle button includes <code>aria-label</code> for screen readers.</li>
      </ul>
    </div>
  ),
};

/** ✅ Best Practices */
export const BestPractices: Story = {
  render: () => (
    <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-lg space-y-4">
      <h2 className="text-xl font-semibold">Best Practices</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-200">
        <li>✅ Always provide a descriptive <code>label</code> for accessibility.</li>
        <li>✅ Use <code>helperText</code> to guide the user, not replace validation.</li>
        <li>✅ Use <code>errorMessage</code> with <code>invalid</code> state for validation errors.</li>
        <li>❌ Don’t rely only on placeholder text as the label.</li>
        <li>❌ Don’t mix multiple variants (outlined, filled, ghost) in the same form without reason.</li>
      </ul>
    </div>
  ),
};
