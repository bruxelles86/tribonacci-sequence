def tribonacci(signature,n)
    return [] if n == 0
    return [signature[0]] if n == 1
    return signature.delete_at(2) if n == 2

    (n-3).times do
      signature.push(signature[-1] + signature[-2] + signature[-3])
    end
    signature
end
