<script lang="ts">
import { computed, defineComponent, h, onMounted, onUnmounted, ref } from "vue";
export default defineComponent({
    name: "FocusDetect",
    emits: ["focusin", "focusout"],
    props: {
        tag: {
            type: String,
            default: "div"
        },
        cls: {
            type: String,
            required: true,
            default: "has-focus"
        }
    },
    setup(props, { emit, slots }) {
        // stats
        const wrapper = ref<HTMLElement>();
        const isFocused = ref(false);
        const classes = computed(() => {
            const res: { [k: string]: boolean } = {};
            res[props.cls] = isFocused.value;
            return res;
        });

        // handler
        const focusHandler = () => {
            setTimeout(() => {
                const oldVal = isFocused.value;
                isFocused.value =
                    !!wrapper.value &&
                    wrapper.value.contains(document.activeElement);
                isFocused.value
                    ? !oldVal && emit("focusin")
                    : oldVal && emit("focusout");
            });
        };
        onMounted(() => {
            document.addEventListener("focusin", focusHandler);
            document.addEventListener("focusout", focusHandler);
        });
        onUnmounted(() => {
            document.removeEventListener("focusin", focusHandler);
            document.removeEventListener("focusout", focusHandler);
        });

        return () =>
            h(
                props.tag,
                {
                    ref: wrapper,
                    class: classes.value
                },
                slots.default ? slots.default() : "Put focusable elements here"
            );
    }
});
</script>
