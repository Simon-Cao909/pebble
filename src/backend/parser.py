import numpy as np

def parse_variables(variables):
    names = []
    bounds = {}
    los = []
    his = []

    for v in variables:
        name = v.name
        lo = v.lower
        hi = v.upper

        names.append(name)
        bounds[name] = (lo,hi)
        los.append(lo)
        his.append(hi)

    return names,bounds,np.asarray(los),np.asarray(his)

def parse_constants(constants):
    consts = []

    if constants is not None:
        for c in constants:
            consts['name'] = c.name
            consts['val'] = c.value

    return consts

def parse_conditions(conditions):
    conds = []

    if conditions is not None:
        for cond in conditions:
            loc = cond.location.replace(" ","").split("=")
            conds.append({'equation':cond.expression,
                        'loc':{loc[0]:float(loc[1])}})

    return conds