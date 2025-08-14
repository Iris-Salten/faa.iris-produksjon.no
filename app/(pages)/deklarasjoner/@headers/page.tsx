'use client';

import SearchBar from '@/app/components/searchBar';
import { BreadcrumbItem, Breadcrumbs, Select, SelectItem } from '@heroui/react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function PageHeader() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const search = searchParams.get('search');
  const size = searchParams.get('size');

  const searchBar = () => {
    const onSearch = (value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set('search', value);
      router.push('?' + params);
    };

    const onReset = () => {
      const params = new URLSearchParams(searchParams);
      params.delete('search');
      router.push('?' + params);
    };

    return (
      <SearchBar value={search ?? ''} onSearch={onSearch} onReset={onReset} />
    );
  };

  const pageSizeSelector = () => {
    const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      const selectedValue = e.target.value;
      const params = new URLSearchParams(searchParams);
      params.set('size', selectedValue);
      params.set('page', '1');
      router.push('?' + params);
    };

    return (
      <Select
        size="sm"
        className="w-[150px] cursor-pointer"
        onChange={onChange}
        defaultSelectedKeys={[size ?? '50']}
      >
        <SelectItem key={'10'}>10</SelectItem>
        <SelectItem key={'25'}>25</SelectItem>
        <SelectItem key={'50'}>50</SelectItem>
        <SelectItem key={'100'}>100</SelectItem>
      </Select>
    );
  };

  return (
    <span className="flex flex-col w-full justify-between gap-3">
      <Breadcrumbs>
        <BreadcrumbItem href="/">Hjem</BreadcrumbItem>
        <BreadcrumbItem>Deklarasjoner</BreadcrumbItem>
      </Breadcrumbs>

      <h1 className="font-medium text-xl">Alle deklarasjoner</h1>

      <span className="flex items-center justify-between">
        {searchBar()}
        {pageSizeSelector()}
      </span>
    </span>
  );
}
