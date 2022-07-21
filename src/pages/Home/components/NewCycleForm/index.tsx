import { FormContainer, MinutesAmountInput, TaskInput } from "./styles";
import { useContext } from "react";
import { useFormContext } from "react-hook-form";
import { CyclesContext } from "../../../../contexts/CyclesContext";

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext);
  const { register } = useFormContext();

  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput
        list="task-suggestions"
        id="task"
        placeholder="Dê um nome para o seu projeto"
        {...register("task")}
        disabled={!!activeCycle}
      />

      <datalist id="task-suggestions">
        {/* <option value="task1" />
        <option value="task2" />
        <option value="task3" /> */}
      </datalist>

      <label htmlFor="minutesAmount">durante</label>
      <MinutesAmountInput
        min={5}
        max={60}
        step={5}
        type="number"
        disabled={!!activeCycle}
        id="minutesAmount"
        placeholder="00"
        {...register("minutesAmount", { valueAsNumber: true })}
      />

      <span>minutos.</span>
    </FormContainer>
  );
}
