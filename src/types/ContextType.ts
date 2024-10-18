import { IServisEvolution, TServisEvolution } from "./ServiceEvolution";

export interface IType {
    evaluationData: IServisEvolution[];
    setEvaluationData: React.Dispatch<React.SetStateAction<IServisEvolution[]>>
}
