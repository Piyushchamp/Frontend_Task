import type { Meta, StoryObj } from "@storybook/react";
import { DataTable, type Column } from "./DataTable";

// Define User type
type User = { id: number; name: string; age: number; role: string };

const sampleData: User[] = [
  { id: 1, name: "Alice", age: 24, role: "Developer" },
  { id: 2, name: "Bob", age: 30, role: "Designer" },
  { id: 3, name: "Charlie", age: 28, role: "Manager" },
];

const columns: Column<User>[] = [
  { key: "name", header: "Name", sortable: true },
  { key: "age", header: "Age", sortable: true },
  { key: "role", header: "Role", sortable: false },
];

const meta: Meta<typeof DataTable<User>> = {
  title: "Components/DataTable",
  component: DataTable<User>,
  parameters: {
    docs: {
      description: {
        component: `
### 📊 DataTable Component

The **DataTable** component provides a way to render structured tabular data with:
- Sorting support
- Row selection (single/multiple)
- Loading & empty states
- Accessibility compliance
- Theming & responsiveness via TailwindCSS
        `,
      },
    },
  },
  args: {
    data: sampleData,
    columns,
  },
};

export default meta;
type Story = StoryObj<typeof DataTable<User>>;

/** ✅ Default State */
export const Default: Story = {};

/** ✅ Sortable Columns */
export const Sortable: Story = {
  args: {
    data: sampleData,
    columns,
  },
};

/** ✅ Row Selection */
export const Selectable: Story = {
  args: {
    data: sampleData,
    columns,
    selectable: true,
    onRowSelect: (rows) => console.log("Selected rows:", rows),
  },
};

/** ✅ Loading State */
export const Loading: Story = {
  args: {
    data: sampleData,
    columns,
    loading: true,
  },
};

/** ✅ Empty State */
export const Empty: Story = {
  args: {
    data: [],
    columns,
  },
};

/** ✅ Props & API Reference */
export const API: Story = {
  render: () => (
    <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-lg space-y-4">
      <h2 className="text-xl font-semibold">Props</h2>
      <pre className="bg-gray-800 text-gray-100 text-sm p-4 rounded-lg overflow-x-auto">
{`interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  loading?: boolean;
  selectable?: boolean;
  onRowSelect?: (selectedRows: T[]) => void;
}

interface Column<T> {
  key: keyof T;
  header: string;
  sortable?: boolean;
}`}
      </pre>
    </div>
  ),
};

/** ✅ Anatomy / Structure */
export const Anatomy: Story = {
  render: () => (
    <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Anatomy</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-200">
        <li><code>&lt;table&gt;</code> → wrapper element</li>
        <li><code>&lt;thead&gt;</code> → column headers (sortable if enabled)</li>
        <li><code>&lt;tbody&gt;</code> → data rows</li>
        <li>Optional row selection checkboxes</li>
        <li>Loading / Empty state placeholders</li>
      </ul>
    </div>
  ),
};

/** ✅ Accessibility Notes */
export const Accessibility: Story = {
  render: () => (
    <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-lg space-y-4">
      <h2 className="text-xl font-semibold">Accessibility Notes</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-200">
        <li>Semantic <code>&lt;table&gt;</code> structure used.</li>
        <li><code>aria-sort</code> is applied to sortable headers.</li>
        <li>Row selection checkboxes include <code>aria-label</code>.</li>
        <li>Keyboard focus & outline enabled for navigation.</li>
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
        <li>✅ Keep column headers short and descriptive.</li>
        <li>✅ Use sorting only where it adds value (numeric/text fields).</li>
        <li>✅ Enable row selection only when batch actions exist.</li>
        <li>❌ Don’t overload with too many columns; keep tables scannable.</li>
        <li>❌ Don’t rely only on colors; ensure sufficient contrast.</li>
      </ul>
    </div>
  ),
};
