import { useQuery } from "react-query";
import { axiosSendGraphQlRequest } from "../../utils/AxiosRequest";

export const useProfessor = (particularData) => {
  const { data: ProfessorData, refetch: ProfessorRefetch } = useQuery(
    "Professor Data",
    async () => {
      const {
        data: { facultys },
        errors,
      } = await axiosSendGraphQlRequest({
        query: `query {
                facultys{
                   ${particularData}
                }
            }`,
      });
      return { facultys, errors };
    },
    { enabled: true }
  );
  return { ProfessorData, ProfessorRefetch };
};

export const useIndividualProfessor = (particularData, _id) => {
  const { data: ProfessorData, refetch: ProfessorRefetch } = useQuery(
    `Individual Professor Data ${_id}`,
    async () => {
      const {
        data: { faculty },
        errors,
      } = await axiosSendGraphQlRequest({
        query: `query faculty($_id: String!) {
                faculty(_id: $_id){
                   ${particularData}
                }
            }`,
        variables: {
          _id,
        },
      });
      return { faculty, errors };
    },
    { enabled: true }
  );
  return { ProfessorData, ProfessorRefetch };
};
