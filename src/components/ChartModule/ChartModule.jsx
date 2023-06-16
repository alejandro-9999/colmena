import { Card, CardHeader, CardPreview, Combobox, Option } from "@fluentui/react-components";
import { useEffect, useState } from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

import data from '../../assets/mock/data.json';





ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const optionsChart = {
    indexAxis: 'y',
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Grafica de ventas',
        },
    },
};

const select_options = {
    'Color':'color',
    'Sede':'dealer_name',
    'Año Modelo':'model_year',
    'Marca':'car_make',
    'Modelo Carro':'car_model'
};


const reducerFunction = (data, element) => {

    const reducerResult = data.reduce((result, registro) => {
        const marca = registro[element];
        if (result[marca]) {
            result[marca]++;
        } else {
            result[marca] = 1;
        }
        return result;
    }, {});

    const keys = Object.keys(reducerResult);
    const values = Object.values(reducerResult);
    const item = new Object();
    item.keys = keys;
    item.values = values;
    return item;
}


const labels = [];

const example_data = {
    labels,
    datasets: [],
};



const ChartModule = () => {

    const [mockData] = useState(data);
    const [schema, setSchema] = useState(example_data);
    const [dataOption, setDataOption] = useState('Color');

    useEffect(() => {

        const item = reducerFunction(mockData, select_options[dataOption]);
        const labels = item.keys;
        const dataset = {
            label: dataOption,
            data: item.values,
            backgroundColor: select_options[dataOption]=='color'?item.keys:'#9BD0F5',

        };
        const data = { labels, datasets: [dataset] }
        setSchema(data);


    }, [mockData,dataOption])


    const options = Object.entries(select_options).map(([value, item]) => ({
        key: value,
        text: item,
    }));



    return (
        <Card>
            <CardHeader header={
                <div>
                    <label id="combo">Seleccione Datos </label>
                    <Combobox
                        label="Selecciona una opción"
                        value={dataOption}
                        onOptionSelect={(i,e) => setDataOption(e.optionValue)}
                    >
                        {options.map((option) => (
                            <Option value={option.key} key={option.key}>
                                {option.key}
                            </Option>
                        ))}
                    </Combobox>
                </div>
            } />
            <CardPreview>
                <div style={{ height: "70vh" }}>
                    {schema != [] && <Bar options={optionsChart} data={schema} />}
                </div>
            </CardPreview>
        </Card>
    );
}


export default ChartModule;