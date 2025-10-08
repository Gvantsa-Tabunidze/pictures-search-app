'use client'

import SearchAndChips from '../filter/SearchAndChips'
import List from './List'
import useFilterListHook from '@/hooks/filterList/useFilterListHook'



function FilterListWrapper() {
  const list = useFilterListHook()

  return (
    <div>
      <SearchAndChips searchValue={list.search} onSearchChange={list.setSearch} selectedChip={list.activeChip} toggle={list.toggleChip}/> 
      <List data={list.filteredData} fetchNextPage={list.fetchNextPage} hasNextPage={list.hasNextPage} isFetchingNextPage={list.isFetchingNextPage} isLoading={list.isLoading} error={list.error}/>
    </div>
  )
}

export default FilterListWrapper
