import React, { ChangeEvent } from 'react';
import { Paper, InputBase, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

interface SearchBarProps {
  handleInput: (e: ChangeEvent<HTMLInputElement>) => void;
  handleMovieSearch: () => void;
  inputQuery: string | undefined;
}

const SearchBar: React.FC<SearchBarProps> = ({ handleInput, handleMovieSearch, inputQuery }) => {
  return (
    <Paper
      sx={{
        alignItems: 'center',
        display: 'flex',
        width: '75%'
      }}
    >
      <InputBase
        sx={{
          ml: 1,
          flex: 1
        }}
        placeholder="Search for movies here!"
        value={inputQuery}
        onChange={handleInput}
        onKeyDown={(e) => { if (e.key === "Enter") handleMovieSearch() }}
      />
      <IconButton type="button" aria-label="search" onClick={handleMovieSearch}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;