package com.metalabs.cephei.web.configuration;

import com.metalabs.cephei.smartitem.impls.DefaultSmartItemRequestFactory;
import com.metalabs.cephei.smartitem.interfaces.SmartItemRequestFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;

@Configuration
@ComponentScan("com.metalabs.cephei.smartitem")
public class SmartItemConfiguration {
    @Bean
    @Primary
    public SmartItemRequestFactory defaultSmartItemRequestFactory() {
        return new DefaultSmartItemRequestFactory();
    }
}
