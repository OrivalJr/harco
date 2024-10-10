import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";





type EagerCondominios = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Condominios, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nome: string;
  readonly cnpj: string;
  readonly endereco: string;
  readonly bairro: string;
  readonly ConvencoesRegulamentos?: (ConvencoesRegulamentos | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCondominios = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Condominios, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nome: string;
  readonly cnpj: string;
  readonly endereco: string;
  readonly bairro: string;
  readonly ConvencoesRegulamentos: AsyncCollection<ConvencoesRegulamentos>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Condominios = LazyLoading extends LazyLoadingDisabled ? EagerCondominios : LazyCondominios

export declare const Condominios: (new (init: ModelInit<Condominios>) => Condominios) & {
  copyOf(source: Condominios, mutator: (draft: MutableModel<Condominios>) => MutableModel<Condominios> | void): Condominios;
}

type EagerConvencoesRegulamentos = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ConvencoesRegulamentos, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly possuiconvencao: string;
  readonly possuiregistro: string;
  readonly dataregistro: string;
  readonly cartorio: string;
  readonly possuiregulamentointerno: string;
  readonly condominiosID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyConvencoesRegulamentos = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ConvencoesRegulamentos, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly possuiconvencao: string;
  readonly possuiregistro: string;
  readonly dataregistro: string;
  readonly cartorio: string;
  readonly possuiregulamentointerno: string;
  readonly condominiosID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ConvencoesRegulamentos = LazyLoading extends LazyLoadingDisabled ? EagerConvencoesRegulamentos : LazyConvencoesRegulamentos

export declare const ConvencoesRegulamentos: (new (init: ModelInit<ConvencoesRegulamentos>) => ConvencoesRegulamentos) & {
  copyOf(source: ConvencoesRegulamentos, mutator: (draft: MutableModel<ConvencoesRegulamentos>) => MutableModel<ConvencoesRegulamentos> | void): ConvencoesRegulamentos;
}

type EagerDadosEstruturais = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<DadosEstruturais, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly dataconstrucao: string;
  readonly idadepredial: string;
  readonly qtdunidades: string;
  readonly qtdaptsresidenciais: string;
  readonly qtdsalascomerciais: string;
  readonly Condominios?: Condominios | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly dadosEstruturaisCondominiosId?: string | null;
}

type LazyDadosEstruturais = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<DadosEstruturais, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly dataconstrucao: string;
  readonly idadepredial: string;
  readonly qtdunidades: string;
  readonly qtdaptsresidenciais: string;
  readonly qtdsalascomerciais: string;
  readonly Condominios: AsyncItem<Condominios | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly dadosEstruturaisCondominiosId?: string | null;
}

export declare type DadosEstruturais = LazyLoading extends LazyLoadingDisabled ? EagerDadosEstruturais : LazyDadosEstruturais

export declare const DadosEstruturais: (new (init: ModelInit<DadosEstruturais>) => DadosEstruturais) & {
  copyOf(source: DadosEstruturais, mutator: (draft: MutableModel<DadosEstruturais>) => MutableModel<DadosEstruturais> | void): DadosEstruturais;
}