/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { Condominios } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify/datastore";
export default function CondominiosUpdateForm(props) {
  const {
    id: idProp,
    condominios: condominiosModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    nome: "",
    cnpj: "",
    endereco: "",
    bairro: "",
  };
  const [nome, setNome] = React.useState(initialValues.nome);
  const [cnpj, setCnpj] = React.useState(initialValues.cnpj);
  const [endereco, setEndereco] = React.useState(initialValues.endereco);
  const [bairro, setBairro] = React.useState(initialValues.bairro);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = condominiosRecord
      ? { ...initialValues, ...condominiosRecord }
      : initialValues;
    setNome(cleanValues.nome);
    setCnpj(cleanValues.cnpj);
    setEndereco(cleanValues.endereco);
    setBairro(cleanValues.bairro);
    setErrors({});
  };
  const [condominiosRecord, setCondominiosRecord] =
    React.useState(condominiosModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Condominios, idProp)
        : condominiosModelProp;
      setCondominiosRecord(record);
    };
    queryData();
  }, [idProp, condominiosModelProp]);
  React.useEffect(resetStateValues, [condominiosRecord]);
  const validations = {
    nome: [{ type: "Required" }],
    cnpj: [{ type: "Required" }],
    endereco: [{ type: "Required" }],
    bairro: [{ type: "Required" }],
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
          nome,
          cnpj,
          endereco,
          bairro,
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
            Condominios.copyOf(condominiosRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
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
      {...getOverrideProps(overrides, "CondominiosUpdateForm")}
      {...rest}
    >
      <TextField
        label="Nome"
        isRequired={true}
        isReadOnly={false}
        value={nome}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nome: value,
              cnpj,
              endereco,
              bairro,
            };
            const result = onChange(modelFields);
            value = result?.nome ?? value;
          }
          if (errors.nome?.hasError) {
            runValidationTasks("nome", value);
          }
          setNome(value);
        }}
        onBlur={() => runValidationTasks("nome", nome)}
        errorMessage={errors.nome?.errorMessage}
        hasError={errors.nome?.hasError}
        {...getOverrideProps(overrides, "nome")}
      ></TextField>
      <TextField
        label="Cnpj"
        isRequired={true}
        isReadOnly={false}
        value={cnpj}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nome,
              cnpj: value,
              endereco,
              bairro,
            };
            const result = onChange(modelFields);
            value = result?.cnpj ?? value;
          }
          if (errors.cnpj?.hasError) {
            runValidationTasks("cnpj", value);
          }
          setCnpj(value);
        }}
        onBlur={() => runValidationTasks("cnpj", cnpj)}
        errorMessage={errors.cnpj?.errorMessage}
        hasError={errors.cnpj?.hasError}
        {...getOverrideProps(overrides, "cnpj")}
      ></TextField>
      <TextField
        label="Endereco"
        isRequired={true}
        isReadOnly={false}
        value={endereco}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nome,
              cnpj,
              endereco: value,
              bairro,
            };
            const result = onChange(modelFields);
            value = result?.endereco ?? value;
          }
          if (errors.endereco?.hasError) {
            runValidationTasks("endereco", value);
          }
          setEndereco(value);
        }}
        onBlur={() => runValidationTasks("endereco", endereco)}
        errorMessage={errors.endereco?.errorMessage}
        hasError={errors.endereco?.hasError}
        {...getOverrideProps(overrides, "endereco")}
      ></TextField>
      <TextField
        label="Bairro"
        isRequired={true}
        isReadOnly={false}
        value={bairro}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nome,
              cnpj,
              endereco,
              bairro: value,
            };
            const result = onChange(modelFields);
            value = result?.bairro ?? value;
          }
          if (errors.bairro?.hasError) {
            runValidationTasks("bairro", value);
          }
          setBairro(value);
        }}
        onBlur={() => runValidationTasks("bairro", bairro)}
        errorMessage={errors.bairro?.errorMessage}
        hasError={errors.bairro?.hasError}
        {...getOverrideProps(overrides, "bairro")}
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
          isDisabled={!(idProp || condominiosModelProp)}
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
              !(idProp || condominiosModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
