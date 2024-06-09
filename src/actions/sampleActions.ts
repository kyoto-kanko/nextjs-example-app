"use server";

interface FormState {
  error: string;
}

export const createTask = async (
  taskId: number,
  state: FormState,
  formData: FormData
) => {
  console.log(formData.get("name"));
  console.log(taskId);
  state.error = "Error";
  return state;
};
