package com.kyg.intro.service;

import com.kyg.intro.data.dto.BoardDTO;
import com.kyg.intro.data.entity.Board;

import java.util.List;
import java.util.Optional;

public interface BoardService {
    List<Board> getBoard();

    Optional<Board> getBoardById(Long id);

    void saveBoard(BoardDTO boardDTO);

    void updateBoard(BoardDTO boardDTO);

    void deleteBoard(Long id);
}
