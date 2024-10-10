/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { DadosEstruturais } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify/datastore";
export default function DadosEstruturaisUpdateForm(props) {
  const {
    id: idProp,
    dadosEstruturais: dadosEstruturaisModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    dataconstrucao: "",
    idadepredial: "",
    qtdunidades: "",
    qtdaptsresidenciais: "",
    qtdsalascomerciais: "",
  };
  const [dataconstrucao, setDataconstrucao] = React.useState(
    initialValues.dataconstrucao
  );
  const [idadepredial, setIdadepredial] = React.useState(
    initialValues.idadepredial
  );
  const [qtdunidades, setQtdunidades] = React.useState(
    initialValues.qtdunidades
  );
  const [qtdaptsresidenciais, setQtdaptsresidenciais] = React.useState(
    initialValues.qtdaptsresidenciais
  );
  const [qtdsalascomerciais, setQtdsalascomerciais] = React.useState(
    initialValues.qtdsalascomerciais
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = dadosEstruturaisRecord
      ? { ...initialValues, ...dadosEstruturaisRecord }
      : initialValues;
    setDataconstrucao(cleanValues.dataconstrucao);
    setIdadepredial(cleanValues.idadepredial);
    setQtdunidades(cleanValues.qtdunidades);
    setQtdaptsresidenciais(cleanValues.qtdaptsresidenciais);
    setQtdsalascomerciais(cleanValues.qtdsalascomerciais);
    setErrors({});
  };
  const [dadosEstruturaisRecord, setDadosEstruturaisRecord] = React.useState(
    dadosEstruturaisModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(DadosEstruturais, idProp)
        : dadosEstruturaisModelProp;
      setDadosEstruturaisRecord(record);
    };
    queryData();
  }, [idProp, dadosEstruturaisModelProp]);
  React.useEffect(resetStateValues, [dadosEstruturaisRecord]);
  const validations = {
    dataconstrucao: [{ type: "Required" }],
    idadepredial: [{ type: "Required" }],
    qtdunidades: [{ type: "Required" }],
    qtdaptsresidenciais: [{ type: "Required" }],
    qtdsalascomerciais: [{ type: "Required" }],
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
          dataconstrucao,
          idadepredial,
          qtdunidades,
          qtdaptsresidenciais,
          qtdsalascomerciais,
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
            DadosEstruturais.copyOf(dadosEstruturaisRecord, (updated) => {
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
      {...getOverrideProps(overrides, "DadosEstruturaisUpdateForm")}
      {...rest}
    >
      <TextField
        label="Dataconstrucao"
        isRequired={true}
        isReadOnly={false}
        type="date"
        value={dataconstrucao}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              dataconstrucao: value,
              idadepredial,
              qtdunidades,
              qtdaptsresidenciais,
              qtdsalascomerciais,
            };
            const result = onChange(modelFields);
            value = result?.dataconstrucao ?? value;
          }
          if (errors.dataconstrucao?.hasError) {
            runValidationTasks("dataconstrucao", value);
          }
          setDataconstrucao(value);
        }}
        onBlur={() => runValidationTasks("dataconstrucao", dataconstrucao)}
        errorMessage={errors.dataconstrucao?.errorMessage}
        hasError={errors.dataconstrucao?.hasError}
        {...getOverrideProps(overrides, "dataconstrucao")}
      ></TextField>
      <TextField
        label="Idadepredial"
        isRequired={true}
        isReadOnly={false}
        value={idadepredial}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              dataconstrucao,
              idadepredial: value,
              qtdunidades,
              qtdaptsresidenciais,
              qtdsalascomerciais,
            };
            const result = onChange(modelFields);
            value = result?.idadepredial ?? value;
          }
          if (errors.idadepredial?.hasError) {
            runValidationTasks("idadepredial", value);
          }
          setIdadepredial(value);
        }}
        onBlur={() => runValidationTasks("idadepredial", idadepredial)}
        errorMessage={errors.idadepredial?.errorMessage}
        hasError={errors.idadepredial?.hasError}
        {...getOverrideProps(overrides, "idadepredial")}
      ></TextField>
      <TextField
        label="Qtdunidades"
        isRequired={true}
        isReadOnly={false}
        value={qtdunidades}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              dataconstrucao,
              idadepredial,
              qtdunidades: value,
              qtdaptsresidenciais,
              qtdsalascomerciais,
            };
            const result = onChange(modelFields);
            value = result?.qtdunidades ?? value;
          }
          if (errors.qtdunidades?.hasError) {
            runValidationTasks("qtdunidades", value);
          }
          setQtdunidades(value);
        }}
        onBlur={() => runValidationTasks("qtdunidades", qtdunidades)}
        errorMessage={errors.qtdunidades?.errorMessage}
        hasError={errors.qtdunidades?.hasError}
        {...getOverrideProps(overrides, "qtdunidades")}
      ></TextField>
      <TextField
        label="Qtdaptsresidenciais"
        isRequired={true}
        isReadOnly={false}
        value={qtdaptsresidenciais}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              dataconstrucao,
              idadepredial,
              qtdunidades,
              qtdaptsresidenciais: value,
              qtdsalascomerciais,
            };
            const result = onChange(modelFields);
            value = result?.qtdaptsresidenciais ?? value;
          }
          if (errors.qtdaptsresidenciais?.hasError) {
            runValidationTasks("qtdaptsresidenciais", value);
          }
          setQtdaptsresidenciais(value);
        }}
        onBlur={() =>
          runValidationTasks("qtdaptsresidenciais", qtdaptsresidenciais)
        }
        errorMessage={errors.qtdaptsresidenciais?.errorMessage}
        hasError={errors.qtdaptsresidenciais?.hasError}
        {...getOverrideProps(overrides, "qtdaptsresidenciais")}
      ></TextField>
      <TextField
        label="Qtdsalascomerciais"
        isRequired={true}
        isReadOnly={false}
        value={qtdsalascomerciais}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              dataconstrucao,
              idadepredial,
              qtdunidades,
              qtdaptsresidenciais,
              qtdsalascomerciais: value,
            };
            const result = onChange(modelFields);
            value = result?.qtdsalascomerciais ?? value;
          }
          if (errors.qtdsalascomerciais?.hasError) {
            runValidationTasks("qtdsalascomerciais", value);
          }
          setQtdsalascomerciais(value);
        }}
        onBlur={() =>
          runValidationTasks("qtdsalascomerciais", qtdsalascomerciais)
        }
        errorMessage={errors.qtdsalascomerciais?.errorMessage}
        hasError={errors.qtdsalascomerciais?.hasError}
        {...getOverrideProps(overrides, "qtdsalascomerciais")}
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
          isDisabled={!(idProp || dadosEstruturaisModelProp)}
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
              !(idProp || dadosEstruturaisModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
