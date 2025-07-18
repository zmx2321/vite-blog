# java 学习积累
## 若依框架打日志
```java
import lombok.extern.slf4j.Slf4j;

@Slf4j

log.error("updateComplaintDelayOperationByWeChat: " + operations);
log.trace("这是一条trace日志");  // 最详细的日志信息
log.debug("这是一条debug日志");  // 调试信息
log.info("这是一条info日志");    // 重要业务信息
log.warn("这是一条warn日志");    // 警告信息
log.error("这是一条error日志");  // 错误信息
```