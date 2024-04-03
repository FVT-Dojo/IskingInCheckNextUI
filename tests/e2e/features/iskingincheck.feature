Feature: Is king in check?

Scenario: King is not in check
    Given the user is in the UI
    When the user clicks the start game button
    Then the user sees a chessboard displayed on the screen
    And the king is placed at E1
    And the rook is placed at A5
    And a label is shown that indicates that the king is not in check