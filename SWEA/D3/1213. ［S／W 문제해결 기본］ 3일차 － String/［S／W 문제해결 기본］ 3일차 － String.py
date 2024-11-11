for _ in range(10):
    n = int(input())
    s = input()
    string = input()

    arr=list(map(str, string.split(s)))
    print('#{} {}'.format(n, len(arr)-1))