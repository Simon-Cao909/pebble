from skdeep import DeepPINN

def get_pinn(variables,functions,equations,conditions,bounds,constants,mins,maxs,outputs):
    if len(outputs) == 1:
        last_layer = [
            'D',outputs[0],'linear'
        ]
    else:
        last_layer = [
            'multi-output',
            [
                ['D',out,'linear'] for out in outputs
            ]
        ]

    model_structure = [
        ['N',mins,maxs],
        ['D',64,'tanh'],
        ['D',64,'tanh'],
        ['D',32,'tanh'],
        last_layer
    ]

    return DeepPINN(variables=variables,
                    equation_structure=equations,
                    conditions=conditions,
                    bounds=bounds,
                    n_samples=1000,
                    functions=functions,
                    constants=constants,

                    model_structure=model_structure,
                    build_setting='quick',
                    epochs=50,
                    batch_size=64,
                    learning_rate=1e-3,
                    validation_split=0.1,
                    early_stopping=True,
                    verbose=0,
                    random_state=42)