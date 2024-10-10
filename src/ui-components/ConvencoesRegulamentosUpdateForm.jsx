/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { ConvencoesRegulamentos } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify/datastore";
export default function ConvencoesRegulamentosUpdateForm(props) {
  const {
    id: idProp,
    convencoesRegulamentos: convencoesRegulamentosModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    possuiconvencao: "",
    possuiregistro: "",
    dataregistro: "",
    cartorio: "",
    possuiregulamentointerno: "",
  };
  const [possuiconvencao, setPossuiconvencao] = React.useState(
    initialValues.possuiconvencao
  );
  const [possuiregistro, setPossuiregistro] = React.useState(
    initialValues.possuiregistro
  );
  const [dataregistro, setDataregistro] = React.useState(
    initialValues.dataregistro
  );
  const [cartorio, setCartorio] = React.useState(initialValues.cartorio);
  const [possuiregulamentointerno, setPossuiregulamentointerno] =
    React.useState(initialValues.possuiregulamentointerno);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = convencoesRegulamentosRecord
      ? { ...initialValues, ...convencoesRegulamentosRecord }
      : initialValues;
    setPossuiconvencao(cleanValues.possuiconvencao);
    setPossuiregistro(cleanValues.possuiregistro);
    setDataregistro(cleanValues.dataregistro);
    setCartorio(cleanValues.cartorio);
    setPossuiregulamentointerno(cleanValues.possuiregulamentointerno);
    setErrors({});
  };
  const [convencoesRegulamentosRecord, setConvencoesRegulamentosRecord] =
    React.useState(convencoesRegulamentosModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(ConvencoesRegulamentos, idProp)
        : convencoesRegulamentosModelProp;
      setConvencoesRegulamentosRecord(record);
    };
    queryData();
  }, [idProp, convencoesRegulamentosModelProp]);
  React.useEffect(resetStateValues, [convencoesRegulamentosRecord]);
  const validations = {
    possuiconvencao: [{ type: "Required" }],
    possuiregistro: [{ type: "Required" }],
    dataregistro: [{ type: "Required" }],
    cartorio: [{ type: "Required" }],
    possuiregulamentointerno: [{ type: "Required" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          possuiconvencao,
          possuiregistro,
          dataregistro,
          cartorio,
          possuiregulamentointerno,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await DataStore.save(
            ConvencoesRegulamentos.copyOf(
              convencoesRegulamentosRecord,
              (updated) => {
                Object.assign(updated, modelFields);
              }
            )
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "ConvencoesRegulamentosUpdateForm")}
      {...rest}
    >
      <TextField
        label="Possuiconvencao"
        isRequired={true}
        isReadOnly={false}
        value={possuiconvencao}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              possuiconvencao: value,
              possuiregistro,
              dataregistro,
              cartorio,
              possuiregulamentointerno,
            };
            const result = onChange(modelFields);
            value = result?.possuiconvencao ?? value;
          }
          if (errors.possuiconvencao?.hasError) {
            runValidationTasks("possuiconvencao", value);
          }
          setPossuiconvencao(value);
        }}
        onBlur={() => runValidationTasks("possuiconvencao", possuiconvencao)}
        errorMessage={errors.possuiconvencao?.errorMessage}
        hasError={errors.possuiconvencao?.hasError}
        {...getOverrideProps(overrides, "possuiconvencao")}
      ></TextField>
      <TextField
        label="Possuiregistro"
        isRequired={true}
        isReadOnly={false}
        value={possuiregistro}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              possuiconvencao,
              possuiregistro: value,
              dataregistro,
              cartorio,
              possuiregulamentointerno,
            };
            const result = onChange(modelFields);
            value = result?.possuiregistro ?? value;
          }
          if (errors.possuiregistro?.hasError) {
            runValidationTasks("possuiregistro", value);
          }
          setPossuiregistro(value);
        }}
        onBlur={() => runValidationTasks("possuiregistro", possuiregistro)}
        errorMessage={errors.possuiregistro?.errorMessage}
        hasError={errors.possuiregistro?.hasError}
        {...getOverrideProps(overrides, "possuiregistro")}
      ></TextField>
      <TextField
        label="Dataregistro"
        isRequired={true}
        isReadOnly={false}
        type="date"
        value={dataregistro}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              possuiconvencao,
              possuiregistro,
              dataregistro: value,
              cartorio,
              possuiregulamentointerno,
            };
            const result = onChange(modelFields);
            value = result?.dataregistro ?? value;
          }
          if (errors.dataregistro?.hasError) {
            runValidationTasks("dataregistro", value);
          }
          setDataregistro(value);
        }}
        onBlur={() => runValidationTasks("dataregistro", dataregistro)}
        errorMessage={errors.dataregistro?.errorMessage}
        hasError={errors.dataregistro?.hasError}
        {...getOverrideProps(overrides, "dataregistro")}
      ></TextField>
      <TextField
        label="Cartorio"
        isRequired={true}
        isReadOnly={false}
        value={cartorio}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              possuiconvencao,
              possuiregistro,
              dataregistro,
              cartorio: value,
              possuiregulamentointerno,
            };
            const result = onChange(modelFields);
            value = result?.cartorio ?? value;
          }
          if (errors.cartorio?.hasError) {
            runValidationTasks("cartorio", value);
          }
          setCartorio(value);
        }}
        onBlur={() => runValidationTasks("cartorio", cartorio)}
        errorMessage={errors.cartorio?.errorMessage}
        hasError={errors.cartorio?.hasError}
        {...getOverrideProps(overrides, "cartorio")}
      ></TextField>
      <TextField
        label="Possuiregulamentointerno"
        isRequired={true}
        isReadOnly={false}
        value={possuiregulamentointerno}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              possuiconvencao,
              possuiregistro,
              dataregistro,
              cartorio,
              possuiregulamentointerno: value,
            };
            const result = onChange(modelFields);
            value = result?.possuiregulamentointerno ?? value;
          }
          if (errors.possuiregulamentointerno?.hasError) {
            runValidationTasks("possuiregulamentointerno", value);
          }
          setPossuiregulamentointerno(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "possuiregulamentointerno",
            possuiregulamentointerno
          )
        }
        errorMessage={errors.possuiregulamentointerno?.errorMessage}
        hasError={errors.possuiregulamentointerno?.hasError}
        {...getOverrideProps(overrides, "possuiregulamentointerno")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || convencoesRegulamentosModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || convencoesRegulamentosModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
