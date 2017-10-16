package junit;

import org.junit.jupiter.api.*;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.Arguments;
import org.junit.jupiter.params.provider.CsvSource;
import org.junit.jupiter.params.provider.MethodSource;
import org.junit.jupiter.params.provider.ValueSource;

import java.util.stream.Stream;

import static org.junit.jupiter.api.Assertions.*;
import static org.junit.jupiter.api.DynamicTest.dynamicTest;

class CalculatorTest {
    private Calculator calculator;

    /**
     * Создает новый экземляр калкулятора для каждого прогона любого из тестов
     */
    @BeforeEach
    void setUp() {
        calculator = new Calculator();
    }

    /**
     * Обычный тест, можно обратить внимание, что нет модификатора public
     */
    @Test
    void add() {
        assertEquals(calculator.add(1,3), 4);
        assertNotEquals(calculator.add(1,3), 12);
    }

    /**
     * Обычный тест, c перезаписанным названием теста, отключенный
     */
    @Test
    @DisplayName("My простой тест для сложения")
    @Disabled
    void add2() {
        assertEquals(calculator.add(1,3), 4);
        assertNotEquals(calculator.add(1,3), 12);
    }

    /**
     * Группировка тестов
     */
    @Nested
    class SubTest{
        @Test
        void sub1() {
            assertEquals(calculator.sub(5,3), 2);
        }

        @Test
        void sub2() {
            assertEquals(calculator.sub(5,3), 2);
        }
    }

    /**
     * Обычный тест, который работает только на многоядерном компьютере
     * иначе дисаблед
     */
    @Test
    void addMultiProcess() {
        Assumptions.assumeTrue(Runtime.getRuntime().availableProcessors() > 1);
        assertEquals(calculator.add(1,3), 4);
    }

    /**
     * Динамически создаваемые тесты на лету
     *
     * @return
     */
    @TestFactory
    Stream<DynamicTest> dynamicTestStream(){
        return Stream.generate(Math::random)
                .mapToInt(v -> (int) (v * 1000))
                .limit(50)
                .mapToObj(i -> dynamicTest("Dyn test " + i,
                        () -> assertEquals(calculator.add(i, i), i + i)));
    }

    /**
     * Обработка Exception
     */
    @Test
    void dibByZero() {
        Exception exception = assertThrows(Exception.class, () -> calculator.div(5, 0));
        assertEquals(exception.getMessage(), "/ by zero", "Invalid error message received");
    }

    /**
     * параметризированный тест, 1 параметр
     *
     * @param a
     */
    @ParameterizedTest
    @ValueSource(ints = {1, 2, 3})
    void addParametrizedTest(int a) {
        assertEquals(calculator.add(a, a), a + a);
    }

    /**
     * параметризированный тест, n параметров
     *
     * @param a
     */
    @ParameterizedTest
    @CsvSource({"1,2", "4,11"})
    void addParametrizedTest(int a, int b) {
        assertEquals(calculator.add(a, b), a + b);
    }

    @ParameterizedTest
    @MethodSource("intProvider")
    void addParametrizedTest2(int a, int b) {
        assertEquals(calculator.add(a, b), a + b);
    }

    static Stream<Arguments> intProvider(){
        return Stream.of(Arguments.of(100,200), Arguments.of(500,200));
    }
}