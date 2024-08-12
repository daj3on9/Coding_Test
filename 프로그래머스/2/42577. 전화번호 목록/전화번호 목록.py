def solution(phone_book):
    prefixs = set(phone_book)
    for number in phone_book:
        for i in range(1, len(number)):
            prefix = number[:i]
            if prefix in prefixs:
                return False
    
    return True