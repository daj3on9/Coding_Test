for _ in range(10) :
    n = int(input())
    arr = [list(map(int, input().split())) for _ in range(100)]

    row_sum = [sum(row) for row in arr]
    max_row = max(row_sum)

    col_sum = [sum(arr[i][j] for i in range(100)) for j in range(100)]
    max_col = max(col_sum)

    left_diagonal_sum = sum(arr[i][i] for i in range(100))
    right_diagonal_sum = sum(arr[i][100 - i - 1] for i in range(100))
    max_diagonal = max(left_diagonal_sum, right_diagonal_sum)

    result = max(max_row, max_col, max_diagonal)

    print(f"#{n} {result}")