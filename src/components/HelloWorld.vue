<template>
  <article class="z-lib">
    <h1 class="z-h2">Formelements</h1>
    <form>
      <div class="flex">
        <div>
          {{ suggestValuesCountry }} / {{ phoneFieldEKS }} <br />Grouplength
          (grouplengthOnInput):
          {{ phoneGroupLength }}
        </div>
        <div>
          <ZPhoneField
            no-inner-layout
            hint="Ein Hinweis"
            error-msg="Eine etwas längere Fehlermeldung"
            class="mb-8"
          >
            <div class="row">
              <div class="col-4">
                <ZSuggestBox
                  v-model="suggestValuesCountry"
                  field-id="suggestCountry"
                  track-id="suggestCountry"
                  label="Vorwahl"
                  name="name"
                  hint=""
                  error-msg=""
                  :suggest-options="suggestValuesCountries"
                  placeholder="Bitte wählen Sie"
                  keyup-pattern="(\d)"
                  options-container="options"
                  maxlength="4"
                />
              </div>
              <div class="col-8">
                <ZTextField
                  v-model="phoneFieldEKS"
                  :grouplength="phoneGroupLength"
                  grouplengthOnInput
                  label="Telefonnummer"
                  maxlength="70"
                  keyup-pattern="(\d)"
                />
              </div>
            </div>
            <div class="col-12">
              <div id="options" class="suggest-outer" />
            </div>
          </ZPhoneField>
        </div>
        <div>
          <ZButton button-size="button--xs" @click="changeCountry"
            >changeCountry</ZButton
          >
        </div>
      </div>

      <div class="flex">
        <div>{{ suggestValue }}</div>
        <div>
          <ZSuggestBox
            v-model="suggestValue"
            field-id="123"
            track-id="123"
            label="Suggestbox"
            name="name"
            hint=""
            error-msg=""
            :suggest-options="suggestValuesProxy"
            placeholder="Bitte wählen Sie"
          />
        </div>
        <div></div>
      </div>
      <div class="flex">
        <div>
          {{ textfieldValue }}<br />
          {{ typeof textfieldValue }}<br />
        </div>
        <div>
          <ZTextField
            v-model="textfieldValue"
            label="Label"
            field-id="121"
            grouplength="4"
            maxlength="70"
            has-char-length-indicator
          />
          <ZTextField
            v-model="textfieldValue"
            label="IBAN"
            field-id="121"
            grouplength="4, 100"
            maxlength="27"
            has-char-length-indicator
            grouplength-on-input
          />
        </div>
        <div>
          <ZButton button-size="button--xs" @click="changeTextfieldValue"
            >Change</ZButton
          >
        </div>
      </div>
      <div class="flex">
        <div>
          {{ rangeValues }}
        </div>
        <div>
          <ZRange
            v-model="rangeValues"
            name="xyz"
            :step="1"
            :margin="0"
            :min="0"
            :max="10"
            :pips="10"
            :pips-caption="['Monat', 'Monate']"
          />
        </div>
        <div>
          <ZButton button-size="button--xs" @click="changeRangeValues"
            >Change</ZButton
          >
        </div>
      </div>
      <div class="flex">
        <div>
          "only-integers" <br />
          {{ textfieldValueNumber }} {{ typeof textfieldValueNumber }}
        </div>
        <div>
          <ZTextField
            v-model="textfieldValueNumber"
            label="Label"
            field-id="345"
            input-type-name="number"
            only-integers
            max="100"
            maxlength="3"
            has-char-length-indicator
          />
        </div>
        <div>
          <ZButton button-size="button--xs" @click="changeTextfieldValueNumber">
            Change
          </ZButton>
        </div>
      </div>
      <div class="flex">
        <div>
          "keyup-pattern="^[0-9 ]*$" <br />
          {{ textfieldValueNumberKeyUpPattern }}
          {{ typeof textfieldValueNumberKeyUpPattern }}
        </div>
        <div>
          <ZTextField
            v-model="textfieldValueNumberKeyUpPattern"
            label="Label"
            field-id="345"
            input-type-name="number"
            max="100"
            maxlength="3"
            keyup-pattern="^[0-9 ]*$"
          />
        </div>
        <div>
          <ZButton
            button-size="button--xs"
            @click="changetextfieldValueNumberKeyUpPattern"
          >
            Change
          </ZButton>
        </div>
      </div>
      <div class="flex">
        <div>
          <p>{{ radiosValuePicked }}</p>
        </div>
        <div>
          <ZRadioGroup title="Titel">
            <ZRadiobutton
              v-model="radiosValuePicked"
              :value="radioValuesTest[0]"
              name="radioname"
              label="eins"
              field-id="1"
              @change="changeInThisExample"
              @update:beforeChange="beforeChange"
            />
            <ZRadiobutton
              v-model="radiosValuePicked"
              :value="radioValuesTest[1]"
              name="radioname"
              label="zwei"
              field-id="2"
              @change="changeInThisExample"
            />
            <ZRadiobutton
              v-model="radiosValuePicked"
              name="radioname"
              :value="radioValuesTest[2]"
              label="drei"
              field-id="3"
              @change="changeInThisExample"
            />
          </ZRadioGroup>
        </div>
        <div>
          <ZButton button-size="button--xs" @click="changeRadioValue"
            >Change</ZButton
          >
        </div>
      </div>
      <div class="flex">
        <div>
          <p>{{ radiosValuePicked }}</p>
        </div>
        <div>
          <ZRadioGroupCard title="Titel">
            <ZRadiobuttonCard
              v-model="radiosValuePicked"
              :value="radioValuesTest[0]"
              name="radionameCard"
              label="eins"
              field-id="1"
              @change="changeInThisExample"
              @update:beforeChange="beforeChange"
            />
            <ZRadiobuttonCard
              v-model="radiosValuePicked"
              :value="radioValuesTest[1]"
              name="radionameCard"
              label="zwei"
              field-id="2"
              @change="changeInThisExample"
            />
            <ZRadiobuttonCard
              v-model="radiosValuePicked"
              name="radionameCard"
              :value="radioValuesTest[2]"
              label="drei"
              field-id="3"
              @change="changeInThisExample"
            />
          </ZRadioGroupCard>
          <div></div>
        </div>
      </div>
      <div class="flex">
        <div>
          <p>
            modelValue: {{ radiosValueBoolPicked }}, Typ modelValue{{
              typeof radiosValueBoolPicked
            }}
          </p>
        </div>
        <div>
          <ZRadioGroup title="Titel">
            <ZRadiobutton
              v-model="radiosValueBoolPicked"
              :value="radiosValueBool[0]"
              name="waa"
              label="Ja"
              field-id="waa_1"
            />
            <ZRadiobutton
              v-model="radiosValueBoolPicked"
              :value="radiosValueBool[1]"
              name="waa"
              label="NEin"
              field-id="waa_2"
            />
          </ZRadioGroup>
        </div>
      </div>
      <div class="flex">
        <div>{{ checkboxChecked }}</div>
        <div>
          <ZCheckBox
            v-model="checkboxChecked"
            field-id="123"
            track-id="123"
            label="Checkbox"
          />
        </div>
        <div>
          <ZButton button-size="button--xs" @click="changeCheckboxValue"
            >Change</ZButton
          >
        </div>
      </div>
      <div class="flex">
        <div>{{ switchboxChecked }}</div>
        <div>
          <ZSwitchBox
            v-model="switchboxChecked"
            field-id="switch"
            track-id="switch"
            label="Switchbox"
          />
        </div>
        <div>
          <ZButton button-size="button--xs" @click="changeCheckboxValue"
            >Change</ZButton
          >
        </div>
      </div>
      <div class="flex">
        <div>{{ selectValue }}</div>
        <div>
          <ZSelectField
            v-model="selectValue"
            field-id="selectField"
            track-id="selectField"
            label="selectField"
          >
            <option disabled selected />
            <option v-for="v in selectValues" :key="v" :value="v">
              {{ v }}
            </option>
          </ZSelectField>
        </div>
        <div>
          <ZButton button-size="button--xs" @click="changeSelectValue"
            >Change</ZButton
          >
        </div>
      </div>
      <div class="flex">
        <div>{{ comboValue }}</div>
        <div>
          <ZComboBox
            v-model="comboValue"
            field-id="123"
            track-id="123"
            label="Combobox"
            name="name"
            hint=""
            error-msg=""
            :combo-options="comboOptions"
            placeholder="Bitte wählen Sie"
            input-editable
            @update:inputValue="updateInputValueCombobox"
            @selectionChanged="selectionChange"
          />
        </div>
        <div>
          <ZButton button-size="button--xs" @click="changeComboValue"
            >Change</ZButton
          >
        </div>
      </div>
      <br />
      <div class="flex">
        <div>{{ radioValueCustomEvent }}</div>
        <div>
          <ZRadioGroup title="Group mit Custom Event">
            <ZRadiobutton
              v-model="radioValueCustomEvent"
              :value="radioValuesCustomEvent[0]"
              name="radionameCE"
              label="pi"
              field-id="1CE"
              custom-data="customData"
              @customEvent="updateDataInThisExample"
            />
            <ZRadiobutton
              v-model="radioValueCustomEvent"
              name="radionameCE"
              label="pa"
              :value="radioValuesCustomEvent[1]"
              field-id="2CE"
              custom-data="customData"
              @customEvent="updateDataInThisExample"
            />
            <ZRadiobutton
              v-model="radioValueCustomEvent"
              :value="radioValuesCustomEvent[2]"
              name="radionameCE"
              label="po"
              field-id="3CE"
              custom-data="customData"
              @customEvent="updateDataInThisExample"
            />
          </ZRadioGroup>
        </div>
      </div>
      <div class="flex">
        <div>{{ zahlweg }}</div>
        <div>
          <ZSelectField
            v-model="zahlweg"
            label="Zahlweg"
            field-id="zahlweg"
            label-shrink
          >
            <option disabled value="">Bitte wählen Sie eine Option...</option>
            <option
              v-for="zahlwegOption in zahlwege"
              :id="zahlwegOption.optionLabel"
              :key="zahlwegOption.optionLabel"
              :value="zahlwegOption.optionValue"
            >
              {{ zahlwegOption.optionLabel }}
            </option>
          </ZSelectField>
        </div>
      </div>
    </form>
  </article>
</template>

<script>
import ZRadioGroup from "de-zurich-z21b-ui-library";
import ZRadioGroupCard from "de-zurich-z21b-ui-library";
import ZRadiobutton from "de-zurich-z21b-ui-library";
import ZRadiobuttonCard from "de-zurich-z21b-ui-library";
import ZTextField from "de-zurich-z21b-ui-library";
import ZCheckBox from "de-zurich-z21b-ui-library";
import ZSwitchBox from "de-zurich-z21b-ui-library";
import ZSelectField from "de-zurich-z21b-ui-library";
import ZComboBox from "de-zurich-z21b-ui-library";
import ZSuggestBox from "de-zurich-z21b-ui-library";
import ZRange from "de-zurich-z21b-ui-library";
import ZPhoneField from "de-zurich-z21b-ui-library";
import ZButton from "de-zurich-z21b-ui-library";
import { defineComponent, ref, watch } from "vue";

export default defineComponent({
  name: "MyPage",

  components: {
    ZButton,
    ZPhoneField,
    ZRadioGroupCard,
    ZRadiobuttonCard,
    ZRange,
    ZComboBox,
    ZSelectField,
    ZSwitchBox,
    ZCheckBox,
    ZRadioGroup,
    ZRadiobutton,
    ZTextField,
    ZSuggestBox,
  },
  emits: ["onClick"],
  setup() {
    const sliderValue = [2, 90];
    const textfieldValue = ref("D E89370400440532013000");
    const textfieldValueNumber = ref(99);
    const textfieldValueNumberKeyUpPattern = ref(12);
    const selectValue = ref("2");
    const radiosValuePicked = ref(1.3);
    const checkboxChecked = ref(true);
    const switchboxChecked = ref(true);
    const suggestValue = ref("Eins");
    const radiosValueBool = ref([true, false]);
    const radiosValueBoolPicked = ref(true);

    const radioValuesTest = ref([1.3, 2.5, 3]);
    const radioValuesCustomEvent = ref(["pi", "pa", "po"]);
    const radioValueCustomEvent = ref("pi");
    const selectValues = ref(["1", "2", "3"]);

    const rangeValues = ref([3, 9]);

    const zahlweg = ref("");
    const zahlwege = ref([
      {
        optionValue: 1,
        optionLabel: "Überweisungg",
      },
      {
        optionValue: 2,
        optionLabel: "PayPal",
      },
    ]);
    const suggestValues = ref([
      "Eins",
      "Zwei Zwei Zwei Zwei Zwei Zwei Zwei Zwei Zwei Zwei Zwei Zwei Zwei Zwei Zwei Zwei Zwei Zwei",
      "Drei",
    ]);
    const suggestValuesProxy = ref(suggestValues.value);

    const comboOptions = ref([
      {
        optionLabel: "Bitte wählen Sie",
        optionValue: null,
        disabled: true,
      },
      {
        optionLabel: "Eins",
        optionValue: "1",
      },
      {
        optionLabel:
          "Zwei Zwei Zwei Zwei Zwei Zwei Zwei Zwei Zwei Zwei Zwei Zwei Zwei Zwei Zwei Zwei Zwei Zwei ",
        optionValue: "2",
      },
      {
        optionLabel: "Drei",
        optionValue: "3",
      },
      {
        optionLabel: "Vier",
        optionValue: "4",
      },
      {
        optionLabel: "Fünf",
        optionValue: "5",
      },
      {
        optionLabel: "Sechs",
        optionValue: "6",
      },
      {
        optionLabel: "Sieben",
        optionValue: "7",
      },
      {
        optionLabel: "Acht",
        optionValue: "8",
      },
      {
        optionLabel: "Neun",
        optionValue: "9",
      },
      {
        optionLabel: "Zehn",
        optionValue: "10",
      },
      {
        optionLabel: "Elf",
        optionValue: "11",
      },
      {
        optionLabel: "Zwölf",
        optionValue: "12",
      },
    ]);
    const comboValue = ref();
    watch(
      () => comboValue.value,
      (v) => {
        comboOptions.value = [
          {
            optionLabel: "Bitte wählen Sie",
            optionValue: null,
            disabled: true,
          },
          {
            optionLabel: "Eins",
            optionValue: "1",
          },
          {
            optionLabel:
              "Zwei Zwei Zwei Zwei Zwei Zwei Zwei Zwei Zwei Zwei Zwei Zwei Zwei Zwei Zwei Zwei Zwei Zwei ",
            optionValue: "2",
          },
          {
            optionLabel: "Drei",
            optionValue: "3",
          },
          {
            optionLabel: "Vier",
            optionValue: "4",
          },
          {
            optionLabel: "Fünf",
            optionValue: "5",
          },
          {
            optionLabel: "Sechs",
            optionValue: "6",
          },
          {
            optionLabel: "Sieben",
            optionValue: "7",
          },
          {
            optionLabel: "Acht",
            optionValue: "8",
          },
          {
            optionLabel: "Neun",
            optionValue: "9",
          },
          {
            optionLabel: "Zehn",
            optionValue: "10",
          },
          {
            optionLabel: "Elf",
            optionValue: "11",
          },
          {
            optionLabel: "Zwölf",
            optionValue: "12",
          },
        ];
      }
    );

    const comboOptionsS = comboOptions.value;
    const onInput = (e) => {
      console.info("onInput", e);
    };

    watch(
      () => suggestValue.value,
      (v) => {
        suggestValuesProxy.value = suggestValues.value.filter((item) => {
          const toTest = item.toLowerCase();
          const inputValue = v.toLowerCase();
          return toTest.includes(inputValue);
        });
      }
    );

    const changeInThisExample = (e) => {
      console.info("changeInThisExample value: ", e.target.value);
      console.info("changeInThisExample name: ", e.target.name);
    };
    const clickInThisExample = (e) => {
      console.info("clickInThisExample", e);
    };
    const updateDataInThisExample = (e, customData) => {
      console.info("updateDataInThisExample", e, customData);
    };

    const filterSuggests = (e) => {
      console.info("filterSuggests", e);
    };
    const updateInputValueCombobox = (e) => {
      const toFilter = comboOptionsS.filter((item) => {
        const toTest = item.optionLabel.toLowerCase();
        const inputValue = e.toLowerCase();
        return toTest.includes(inputValue);
      });
      comboOptions.value = toFilter;
    };

    const changeComboValue = (e) => {
      e.preventDefault();
      comboValue.value = "3";
    };
    const changeSelectValue = (e) => {
      e.preventDefault();
      selectValue.value = "3";
    };
    const changeTextfieldValue = (e) => {
      e.preventDefault();
      textfieldValue.value = "Hello";
    };
    const changeTextfieldValueNumber = (e) => {
      e.preventDefault();
      const r = Math.floor(Math.random() * 4);

      switch (r) {
        case 0:
          textfieldValueNumber.value = null;
          break;
        case 1:
          textfieldValueNumber.value = 1;
          break;
        case 2:
          textfieldValueNumber.value = "drei";
          break;
        case 3:
          textfieldValueNumber.value = "1.4";
          break;
      }
    };
    const changetextfieldValueNumberKeyUpPattern = (e) => {
      e.preventDefault();
      const r = Math.floor(Math.random() * 4);
      switch (r) {
        case 0:
          textfieldValueNumberKeyUpPattern.value = null;
          break;
        case 1:
          textfieldValueNumberKeyUpPattern.value = 1;
          break;
        case 2:
          textfieldValueNumberKeyUpPattern.value = 1.5;
          break;
        case 3:
          textfieldValueNumberKeyUpPattern.value = "drei";
          break;
      }
    };
    const changeRadioValue = (e) => {
      e.preventDefault();
      radiosValuePicked.value = 2.5;
    };
    const changeCheckboxValue = (e) => {
      e.preventDefault();
      checkboxChecked.value = !checkboxChecked.value;
      switchboxChecked.value = !switchboxChecked.value;
    };
    const beforeChange = () => {
      console.info("mää");
    };
    const changeRangeValues = (e) => {
      e.preventDefault();
      rangeValues.value = [5, 6];
    };

    const suggestValuesCountry = ref("");

    const suggestValuesCountries = [
      {
        suggestLabel: "+49",
        suggestPrefix: "Deutschland",
        suggestCountry: "DE",
      },
      {
        suggestLabel: "+43",
        suggestPrefix: "Österreich",
        suggestCountry: "AT",
        hasSeparator: true,
      },
      {
        suggestLabel: "+32",
        suggestPrefix: "Belgien",
        suggestCountry: "BE",
      },
      {
        suggestLabel: "+359",
        suggestPrefix: "Bulgarien",
        suggestCountry: "BG",
      },
      {
        suggestLabel: "+45",
        suggestPrefix: "Dänemark",
        suggestCountry: "DK",
      },
      {
        suggestLabel: "+358",
        suggestPrefix: "Finnland",
        suggestCountry: "FI",
      },
      {
        suggestLabel: "+33",
        suggestPrefix: "Frankreich",
        suggestCountry: "FR",
      },
      {
        suggestLabel: "+30",
        suggestPrefix: "Griechenland",
        suggestCountry: "GR",
      },
      {
        suggestLabel: "+44",
        suggestPrefix: "Großbritannien",
        suggestCountry: "GB",
      },
      {
        suggestLabel: "+353",
        suggestPrefix: "Irland",
        suggestCountry: "IE",
      },
      {
        suggestLabel: "+39",
        suggestPrefix: "Italien",
        suggestCountry: "IT",
      },
      {
        suggestLabel: "+352",
        suggestPrefix: "Luxemburg",
        suggestCountry: "LU",
      },
      {
        suggestLabel: "+31",
        suggestPrefix: "Niederlande",
        suggestCountry: "NL",
      },
      {
        suggestLabel: "+47",
        suggestPrefix: "Norwegen",
        suggestCountry: "NO",
      },
      {
        suggestLabel: "+48",
        suggestPrefix: "Polen",
        suggestCountry: "PL",
      },
      {
        suggestLabel: "+351",
        suggestPrefix: "Portugal",
        suggestCountry: "PT",
      },
      {
        suggestLabel: "+40",
        suggestPrefix: "Rumänien",
        suggestCountry: "RO",
      },
      {
        suggestLabel: "+46",
        suggestPrefix: "Schweden",
        suggestCountry: "SE",
      },
      {
        suggestLabel: "+41",
        suggestPrefix: "Schweiz",
        suggestCountry: "CH",
      },
      {
        suggestLabel: "+34",
        suggestPrefix: "Spanien",
        suggestCountry: "ES",
      },
      {
        suggestLabel: "+36",
        suggestPrefix: "Ungarn",
        suggestCountry: "HU",
      },
    ];

    const phoneFieldEKS = ref("");
    const phoneGroupLength = ref("");
    /* const changeGrouplength = (v) => {
      console.info('changeGrouplength', v)
    } */
    watch(
      () => suggestValuesCountry.value,
      (v) => {
        switch (v) {
          case "+49":
            phoneGroupLength.value = "4, 100";
            break;
          case "+43":
            phoneGroupLength.value = "2";
            break;
          case "+32":
            phoneGroupLength.value = "1, 3, 5, 1000";
            break;
          default:
            phoneGroupLength.value = "3";
            break;
        }
      }
    );

    const changeCountry = (e) => {
      e.preventDefault();
      suggestValuesCountry.value = "+39";
    };
    return {
      changeCountry,
      phoneGroupLength,
      phoneFieldEKS,
      textfieldValueNumberKeyUpPattern,
      suggestValuesCountry,
      suggestValuesCountries,
      radiosValueBoolPicked,
      radiosValueBool,
      changeCheckboxValue,
      changeRadioValue,
      changeTextfieldValue,
      changeSelectValue,
      changeComboValue,
      zahlwege,
      zahlweg,
      updateInputValueCombobox,
      filterSuggests,
      suggestValues,
      suggestValue,
      suggestValuesProxy,
      onInput,
      radioValueCustomEvent,
      radioValuesCustomEvent,
      comboValue,
      comboOptions,
      selectValue,
      selectValues,
      switchboxChecked,
      checkboxChecked,
      radiosValuePicked,
      textfieldValue,
      changeInThisExample,
      clickInThisExample,
      radioValuesTest,
      updateDataInThisExample,
      textfieldValueNumber,
      beforeChange,
      rangeValues,
      changeRangeValues,
      changeTextfieldValueNumber,
      changetextfieldValueNumberKeyUpPattern,
    };
  },
});
</script>
<style lang="scss" scoped>
.flex {
  display: flex;

  flex-wrap: wrap;
  > div {
    border: 1px dashed gray;
  }
  > div:nth-child(even) {
    width: 64%;
    padding: 10px;
  }
  > div:nth-child(odd) {
    width: 18%;
    padding: 10px;
    font-size: 12px;
  }
}
</style>
