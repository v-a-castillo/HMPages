
import { DialogDescription } from "@radix-ui/react-dialog";
import { Checkbox } from "./ui/checkbox";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/shared/components/ui/dialog"


type Column = {
  key: string;
  label: string;
  sortable: boolean;
  searchable: boolean;
  link?: boolean;
  visible?: boolean,
};

interface TableColumsProps {
  columns: Column[];
  onChange: (columns: Column[]) => void;
}

export const TableColums: React.FC<TableColumsProps> = ({ columns, onChange }) => {

  const handleVisibilityChange = (index: number, visible: boolean) => {
    const updatedColumns = [...columns];
    updatedColumns[index] = { ...updatedColumns[index], visible };
    onChange(updatedColumns);
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger >Select Columns</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Columns</DialogTitle>
            <DialogDescription>Select column</DialogDescription>
          </DialogHeader>
          <div>
            <h3>Column Visibility</h3>
            <hr />
            <table>
              <thead>
                <tr>
                  <th>Column</th>
                  <th>Visible</th>
                </tr>
              </thead>
              <tbody>
                {columns.map((col, index) => (
                  <tr key={col.key}>
                    <td>{col.label}</td>
                    <td>
                      <Checkbox
                        checked={col.visible}
                        onCheckedChange={(checked) =>
                          handleVisibilityChange(index, !!checked)
                        }
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </DialogContent>
      </Dialog>

    </div>
  );
};
