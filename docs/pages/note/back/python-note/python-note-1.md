# python工作积累
## 1. 字符串
### 1.1 字符串格式化
```python
name = 'world'
print('hello %s' % name)
```

## 将字符串转列表
```python
reply = """
    eoms工单号: xxx
    优化单号: 2123333
    eoms工单号: yyy
    优化单号: 1x21111
    """

def resolve_data():
    lines = reply.strip().split('\n')
    result = []
    current_item = {}
    for line in lines:
        if line.strip():
            key, value = re.split(r':\s*', line.strip(), 1)
            if 'eoms工单号' in key:
                if current_item:
                    result.append(current_item)
                current_item = {'eomsId': value.strip()}
            elif '优化单号' in key:
                current_item['optimizeOrderId'] = value.strip()
    if current_item:
        result.append(current_item)
    return result
```