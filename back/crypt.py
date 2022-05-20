import spacy
import random as r
from sklearn.metrics.pairwise import cosine_similarity as f

# 최초 실행시 아래 코드를 포함해 실행 후 다시 주석처리 요망
# spacy.cli.download('en_core_web_lg')

def crypt(string):
    nlp = spacy.load('en_core_web_lg')
    words = list(string.split())
    word_vectors = [nlp.vocab.get_vector(i) for i in words]
    key = []

    if len(words) == 1:
        k = r.randint(-10, 10)
        while not k:
            k = r.randint(-10, 10)
        key.append(k)
        
        return key, 1

    for i in range(len(words) - 1):
        cos = f([word_vectors[i]], [word_vectors[i + 1]])[0, 0]
        key.append(int(cos * 100) % 26)
    
    key.append(sum(key) % 26)
    
    return key, len(key)


if __name__ == "__main__":
    print("hi")